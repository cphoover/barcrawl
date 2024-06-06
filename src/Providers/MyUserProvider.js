import { useEffect, useState, useContext, createContext } from "react";
import { debug, getUserId } from "../utils.js";
import { supabase } from "../db.js";

const MyUserContext = createContext(null);

export const useMyUser = () => {
  const context = useContext(MyUserContext);
  if (!context) {
    throw new Error("useMyUser must be used within a MyUserProvider");
  }
  return context;
};

export const MyUserProvider = ({ children }) => {
  const [myDetails, setMyDetails] = useState({});
  const userId = getUserId();

  
  useEffect(() => {
    const refreshMyUserData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", userId)
        .single();

        

      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        debug("refreshMyUserData data", data);
        setMyDetails(data);
      }
    };

    refreshMyUserData();
  }, [userId]);

  
  const iAmRegistered = myDetails?.registered === true;

  return (
    <MyUserContext.Provider
      value={{ userId, myDetails, iAmRegistered, setMyDetails }}
    >
      {children}
    </MyUserContext.Provider>
  );
};
