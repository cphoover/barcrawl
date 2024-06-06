import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../db";
import { debug, getUserId } from "../utils";

// Creating the context
const OnlineUsersContext = createContext();

document.addEventListener("visibilitychange", function () {
  debug(`Your page is  ${document.visibilityState}`);
});

// Provider component
export const OnlineUsersProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState(new Set());

  useEffect(() => {
    const userId = getUserId(); // Ensure you have a unique identifier for the user
    const presenceChannel = supabase
      .channel("presence", {
        config: {
          presence: {
            key: userId,
          },
        },
      })
      .on("presence", { event: "sync" }, () => {        
        const state = presenceChannel.presenceState();
        setOnlineUsers(new Set(Object.keys(state)));
      })
      .on("presence", { event: "join" }, ({ key }) => {
        setOnlineUsers((prev) => new Set([...prev, key]));
      })
      .on("presence", { event: "leave" }, ({ key }) => {
        setOnlineUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(key);
          return updated;
        });
      })
      .subscribe();
    const trackPayload = {
      id: userId, // Track the user's presence using their user_id
    };

    presenceChannel.track(trackPayload);

    return () => {
      supabase.removeChannel(presenceChannel);
    };
  }, []);

  return (
    <OnlineUsersContext.Provider value={onlineUsers}>
      {children}
    </OnlineUsersContext.Provider>
  );
};

// Custom hook for accessing online users
export const useOnlineUsers = () => {
  const context = useContext(OnlineUsersContext);
  if (context === undefined) {
    throw new Error(
      "useOnlineUsers must be used within an OnlineUsersProvider"
    );
  }
  return context;
};
