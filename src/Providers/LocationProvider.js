import React, { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../db";
import { debug, getUserId } from "../utils";

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [position, setPosition] = useState(null);

  const updatePosition = async (latitude, longitude) => {
    // Assuming user_id is globally available or stored in context
    const userId = getUserId(); // Retrieve user ID function
    const { data, error } = await supabase.from("userPositions").upsert({
      user_id: userId,
      latitude,
      longitude,
      updated_at: new Date(),
    });

    if (error) {
      console.error("Error updating position:", error.message);
    }
  };

  useEffect(() => {
    const handleError = (error) => console.error("Geolocation error:", error);
    const handleSuccess = ({ coords }) => {
      debug("Geolocation success:", coords);
      setPosition([coords.latitude, coords.longitude]);
      updatePosition(coords.latitude, coords.longitude);
    };

    debug("Geolocation watching...");

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const geolocationOptions = {};

    if (isSafari) {
      geolocationOptions.enableHighAccuracy = true;
    }

    // seems to work on chrome without options but noy ios
    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      geolocationOptions
    );

    return () => {
      debug("Geolocation clearing watch...");
      return navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <LocationContext.Provider value={position}>
      {children}
    </LocationContext.Provider>
  );
};
