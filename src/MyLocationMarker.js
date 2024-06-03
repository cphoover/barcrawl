import { useEffect, useState } from "react";
// import { Marker, Popup, useMap } from "react-leaflet";
import { getUserId } from "./utils.js";
import { supabase } from "./db";
import Marker from "./CustomMarker";
import { Source, Layer } from "react-map-gl";
import BlinkMarker from "./BlinkMarker.js";

const layerStyleType2 = {
  id: "layerStyleType2",
  type: "circle",
  source: "sourceType2",
  paint: {
    "circle-radius": 10,
    "circle-color": "#ff0000",
  },
};

const MyLocationMarker = () => {
  const [position, setPosition] = useState(null);
  // const map = useMap();
  const userId = getUserId(); // Get the user ID

  useEffect(() => {
    const updatePosition = async (latitude, longitude) => {
      const { error } = {};
      await supabase.from("userPositions").upsert({
        user_id: userId,
        latitude,
        longitude,
        updated_at: new Date(),
      });
      if (error) console.error("Error updating position:", error.message);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {

      const handleError = (error) => {
        console.error("Error getting user position:", error.message);
      }

      const handleUserPosition = (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        console.log("Position:", latitude, longitude);
        // map.setView([latitude, longitude], 12);
        updatePosition(latitude, longitude);
      }
      
      navigator.geolocation.watchPosition(handleUserPosition, handleError, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [userId]);

  const geojsonType2 = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: position,
        },
        properties: { id: "marker2", description: "Type 2 Marker" },
      },
      // Add more markers of type 2
    ],
  };

  return position === null ? null : (
    <>
      <Marker
        latitude={position[0]}
        longitude={position[1]}
        layerOrder={99}
        icon={<BlinkMarker />}
      />

      {/* Source and Layer for Type 2 markers */}
    </>
  );
};
export default MyLocationMarker;
