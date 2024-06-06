import React, {
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { debounce } from "lodash";
import MapboxMap, { NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY3Bob292ZXIiLCJhIjoiY2x3amhsMXZlMTFjdDJpcW5rb3Z1bWw3bSJ9.zim9MR8_RVDNiVDmw5E4-Q"; // Replace with your Mapbox token

const initialViewState = {
  latitude: 39.2904, // Latitude for Baltimore
  longitude: -76.6122, // Longitude for Baltimore
  zoom: 12, // Adjust zoom level as needed
};

const CustomMap = ({ children, ...rest }) => {
  return (
    <MapboxMap
      initialViewState={initialViewState}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: "100vw", height: "100vh" }}
      {...rest}
    >
      <div style={{ position: "absolute", right: 10, top: 10 }}>
        <NavigationControl />
      </div>
      {children}
    </MapboxMap>
  );
};

export default CustomMap;
