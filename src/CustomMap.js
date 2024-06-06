import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import MapboxMap, { NavigationControl } from "react-map-gl";
import cn from "classnames";
import "mapbox-gl/dist/mapbox-gl.css";
import { useLocation } from "./Providers/LocationProvider";
import LocationIcon from "./icons/location";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY3Bob292ZXIiLCJhIjoiY2x3amhsMXZlMTFjdDJpcW5rb3Z1bWw3bSJ9.zim9MR8_RVDNiVDmw5E4-Q"; // Replace with your Mapbox token

const initialViewState = {
  latitude: 39.2904, // Latitude for Baltimore
  longitude: -76.6122, // Longitude for Baltimore
  zoom: 12, // Adjust zoom level as needed
};

const MapContext = createContext();

export const useMap = () => useContext(MapContext);

// Debounced function to register markers
const debouncedRegisterMarkers = debounce(
  (loadedMap, markersWithLayers) => {
    const map = loadedMap;

    if (map) {
      const unsortedMarkers = Array.from(markersWithLayers.entries());

      const sortedMarkers = unsortedMarkers
        .sort((a, b) => a[1] - b[1])
        .map((entry) => entry[0]);

      sortedMarkers.forEach((marker) => marker.addTo(map));
    }
  },
  100,
  { leading: true, trailing: false }
);

const LocationButton = styled.div`
  z-index: 99;
  float: right;
  margin: 10px 10px 0 0;
  width: 29px;
  height: 29px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  float: right;
  margin: 10px 10px 0 0;
  text-align: center;
  background: #fff;
  display: flex;
  border-radius: 4px;
  border: 0;
  align-items: center;
  justify-content: center;

  top: 96px;
  position: relative;

  & svg {
    fill: #ccc;
  }

  &.active svg {
    fill: black;
  }
`;

// Function to animate the map to a new location
function animateMapToLocation({ map, position }) {
  if (!position) return;

  map.flyTo({
    center: [position[1], position[0]],
    zoom: 13,
    essential: true, // This ensures the animation is performed smoothly
  });
}

const CustomMap = ({ children, ...rest }) => {
  const [followUser, setFollowUser] = useState(false);
  const position = useLocation();

  // follow user if enabled
  useEffect(() => {
    if (!followUser) return;

    animateMapToLocation({
      map: loadedMap,
      position,
    });
  }, [position, followUser]);

  const [markersWithLayers, setMarkersWithLayers] = useState(new Map());
  const [loadedMap, setLoadedMap] = useState(false);

  const mapNodeCB = useCallback(
    (mapNode) => {
      if (mapNode && !loadedMap) {
        const map = mapNode.getMap();
        global.map = map; // For debugging
        map.on("load", () => {
          setLoadedMap(map);
        });
      }
    },
    [loadedMap]
  );

  useEffect(() => {
    debouncedRegisterMarkers(loadedMap, markersWithLayers);
  }, [loadedMap, markersWithLayers]);

  const registerMarker = useCallback((markerWithLayer) => {
    setMarkersWithLayers((prevMarkers) => {
      const newMarkers = new Map(prevMarkers);
      newMarkers.set(markerWithLayer.marker, markerWithLayer.layerOrder);
      return newMarkers;
    });
  }, []);

  return (
    <>
      <MapContext.Provider value={{ map: loadedMap, registerMarker }}>
        <MapboxMap
          ref={mapNodeCB}
          initialViewState={initialViewState}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          style={{ width: "100vw", height: "100vh" }}
          {...rest}
        >
          {/* <div style={{ position: "absolute", right: 10, top: 10 }}> */}

          <NavigationControl />

          <LocationButton
            className={cn("location-button", {
              active: followUser,
            })}
            onClick={() => {
              if (!position) {
                window.alert("Could not locate your position");
              }
              setFollowUser((prev) => !prev);
            }}
          >
            <LocationIcon />
          </LocationButton>

          {/* <div></div>
          </div> */}

          {children}
        </MapboxMap>
      </MapContext.Provider>
    </>
  );
};

export default CustomMap;
