import { useEffect, useState, useMemo } from "react";
import { getUserId } from "./utils.js";
import { supabase } from "./db";
// import { Marker, Popup } from
import { Marker } from "react-map-gl";
import { redIcon } from "./icons";
import PersonMarker from "./PersonMarker.js";

const OtherUsersMarkers = ({ onlineUsers }) => {
  const [otherUsers, setOtherUsers] = useState([]);
  const userId = getUserId(); // Get the user ID

  const filteredUsers = useMemo(
    () => otherUsers.filter((user) =>
    onlineUsers.has(user.user_id) && user.user_id !== userId
  ), [onlineUsers, otherUsers, userId]);

  useEffect(() => {
    console.log('onlineUsers++++', [...onlineUsers])
    const fetchOtherUsers = async () => {
      console.log("asdf fetchOtherUsers", { onlineUsers, userId });
      const { data, error } = await supabase
        .from("userPositions")
        .select("*")
        .in("user_id", [...onlineUsers])
        .neq("user_id", userId); // Exclude the current user's marker
      if (error) {
        console.error("Error fetching other users:", error.message);
      } else {
        setOtherUsers(data);
      }
    };

    fetchOtherUsers();

    const channel = supabase
      .channel("userPositions")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "userPositions" },
        (payload) => {
          console.log("insert", { payload });
          setOtherUsers((users) => [...users, payload.new]);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "userPositions" },
        (payload) => {
          console.log(
            "update",
            payload.new.user_id,
            payload.new.latitude,
            payload.new.longitude
          );
          setOtherUsers((users) => {
            const userExists = users.some(
              (user) => user.user_id === payload.new.user_id
            );
            if (userExists) {
              return users.map((user) =>
                user.user_id === payload.new.user_id ? payload.new : user
              );
            } else {
              return [...users, payload.new];
            }
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [onlineUsers, userId]);

  return (
    <>
      {filteredUsers.map((user) => (
        <Marker
          key={user.id}
          latitude={user.latitude}
          longitude={user.longitude}
        >
          <PersonMarker
            photoUrl={user.photoUrl || "https://picsum.photos/200?asdf"}
          />
          {/* <Popup>Another user is here</Popup> */}
        </Marker>
      ))}
    </>
  );
};
export default OtherUsersMarkers;
