import { useEffect, useState, useMemo } from "react";
import { getUserId } from "./utils.js";
import { supabase } from "./db";
// import { Marker, Popup } from
import { Marker } from "react-map-gl";
import { redIcon } from "./icons";
import { memoize } from "lodash";
import PersonMarker from "./PersonMarker";
import PersonAvatar from "./PersonAvatar";
import { useOnlineUsers } from "./Providers/OnlineUsersProvider.js";
import styled from "styled-components";
import randomColor from "randomcolor";

// const getPastelColor = memoize((userId) => {
//   return (
//     "hsl(" +
//     360 * Math.random() +
//     "," +
//     (25 + 70 * Math.random()) +
//     "%," +
//     (85 + 10 * Math.random()) +
//     "%)"
//   );
// });

const userColors = new Map();
const getPastelColor = (userId) => {
  if (userColors.has(userId)) {
    return userColors.get(userId);
  } else {
    const color = randomColor({
      luminosity: "light",
    });
    userColors.set(userId, color);
    return color;
  }
};

const OtherUsersMarkers = () => {
  const onlineUsers = useOnlineUsers();
  debug("onlineUsers", onlineUsers);
  const [otherUsers, setOtherUsers] = useState([]);
  const userId = getUserId(); // Get the user ID

  const filteredUsers = useMemo(
    () =>
      otherUsers.filter(
        (user) => user.user_id !== userId
        // && onlineUsers.has(user.user_id)
      ),
    [
      // onlineUsers,
      otherUsers,
      userId,
    ]
  );

  useEffect(() => {
    // debug('onlineUsers++++', [...onlineUsers])
    const fetchOtherUsers = async () => {
      // debug("asdf fetchOtherUsers", { onlineUsers, userId });
      const { data, error } = await supabase
        .from("userPositions")
        .select("*")
        .neq("user_id", userId)
        .or(
          `created_at.gte.${new Date(
            new Date() - 3600 * 1000
          ).toISOString()},updated_at.gte.${new Date(
            new Date() - 3600 * 1000
          ).toISOString()}`
        );

      //     // .in("user_id", [...onlineUsers])
      // Exclude the current user's marker
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
          // debug("insert", { payload });
          setOtherUsers((users) => [...users, payload.new]);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "userPositions" },
        (payload) => {
          // debug(
          //   "update",
          //   payload.new.user_id,
          //   payload.new.latitude,
          //   payload.new.longitude
          // );
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
  }, [
    // onlineUsers,
    userId,
  ]);

  return (
    <>
      {filteredUsers.map((user) => {
        const playerColor = getPastelColor(user.user_id);
        return (
          <Marker
            key={user.id}
            latitude={user.latitude}
            longitude={user.longitude}
          >
            {onlineUsers.has(user.user_id) ? (
              <PersonAvatar
                photoUrl={
                  user.photoUrl || "https://picsum.photos/200?" + Math.random()
                }
                color={playerColor}
                user={user}
              />
            ) : (
              <PersonMarker
                photoUrl={
                  user.photoUrl || "https://picsum.photos/200?" + Math.random()
                }
                color={playerColor}
                user={user}
              />
            )}

            {/* <Popup>Another user is here</Popup> */}
          </Marker>
        );
      })}
    </>
  );
};
export default OtherUsersMarkers;
