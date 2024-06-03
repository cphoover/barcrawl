import React from "react";
import MapboxMap, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY3Bob292ZXIiLCJhIjoiY2x3amhsMXZlMTFjdDJpcW5rb3Z1bWw3bSJ9.zim9MR8_RVDNiVDmw5E4-Q"; // Replace with your Mapbox token

const initialViewState = {
  latitude: 39.2904, // Latitude for Baltimore
  longitude: -76.6122, // Longitude for Baltimore
  zoom: 12, // Adjust zoom level as needed
};
const Map = ({ children }) => {
  const [viewport, setViewport] = React.useState({
    width: "100vw", 
    height: "100vh",
    latitude: 39.2904, // Latitude for Baltimore
    longitude: -76.6122, // Longitude for Baltimore
    zoom: 12, // Adjust zoom level as needed
  });

  return (
    <MapboxMap
      // {...viewport}
      initialViewState={initialViewState}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      // onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <div style={{ position: "absolute", right: 10, top: 10 }}>
        <NavigationControl
        // onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
      {children}
    </MapboxMap>
  );
};

export default Map;
