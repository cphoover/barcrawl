import { useEffect, useState, useContext, createContext } from "react";
import { debug, getUserId } from "../utils.js";
import { supabase } from "../db.js";

const OtherUsersContext = createContext(null);

export const useOtherUsers = () => {
  const context = useContext(OtherUsersContext);
  if (!context) {
    throw new Error("useOtherUsers must be used within a OtherUsersProvider");
  }
  return context;
};

export const OtherUsersProvider = ({ children }) => {
  const [nonFilteredUsers, setNonFilteredUsers] = useState([]);
  const [otherUsersDetails, setOtherUsersDetails] = useState(new Map());
  const userId = getUserId();

  const userIsRegistered = (userId) => {
    return otherUsersDetails.has(userId);
  };

  // Filter users
  const otherUsersPositions = nonFilteredUsers.filter(
    (user) => user.user_id !== userId && userIsRegistered(user.user_id)
  );

  async function updateNewUserDetails(userIds) {
    const newUserIds = userIds.filter((id) => !otherUsersDetails.has(id));
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .in("user_id", newUserIds);

    if (error) {
      console.error("Error fetching user details:", error);
      return;
    }

    const userDetailsMap = new Map(otherUsersDetails);
    data.forEach((user) => {
      userDetailsMap.set(user.user_id, user);
    });
    setOtherUsersDetails(userDetailsMap);
  }

  useEffect(() => {
    updateNewUserDetails(nonFilteredUsers.map((user) => user.user_id));
  }, [nonFilteredUsers]);

  useEffect(() => {
    const oneHourAgo = new Date(
      new Date().getTime() - 3600 * 1000
    ).toISOString();
    const fetchOtherUsers = async () => {
      const { data, error } = await supabase
        .from("userPositions")
        .select("*")
        .neq("user_id", userId)
        .or(`created_at.gte.${oneHourAgo},updated_at.gte.${oneHourAgo}`);

      debug("fetchOtherUsers data", data);

      try {
        await updateNewUserDetails(data.map((user) => user.user_id));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }

      if (error) {
        console.error("Error fetching other users:", error.message);
      } else {
        setNonFilteredUsers(data);
      }
    };

    fetchOtherUsers();

    const channel = supabase
      .channel("userPositions")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "userPositions" },
        async (payload) => {
          setNonFilteredUsers((users) => [...users, payload.new]);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "userPositions" },
        async (payload) => {
          setNonFilteredUsers((users) => {
            return users.map((user) =>
              user.user_id === payload.new.user_id ? payload.new : user
            );
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  // update a user detail if we recieve an db change on the user table
  useEffect(() => {
    const channel = supabase
      .channel("users")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "users" },
        async (payload) => {
          debug("new user", payload.new);

          setOtherUsersDetails((prev) =>
            new Map(prev).set(payload.new.user_id, payload.new)
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "users" },
        async (payload) => {
          debug("user profile update", payload.new);
          setOtherUsersDetails((prev) =>
            new Map(prev).set(payload.new.user_id, payload.new)
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  const getUserAvatar = (userId) => {
    return otherUsersDetails.get(userId)?.avatar_url;
  };

  const getSmallAvatar = (userId) => {
    return otherUsersDetails.get(userId)?.avatar_small;
  };

  const UserHelpers = {
    getUserAvatar,
    getSmallAvatar,
  };

  return (
    <OtherUsersContext.Provider
      value={{
        otherUsersPositions,
        otherUsersDetails,
        UserHelpers,
      }}
    >
      {children}
    </OtherUsersContext.Provider>
  );
};
