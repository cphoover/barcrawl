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

const CustomMap = ({ children, ...rest }) => {
  const mapRef = useRef(null);
  const [markersWithLayers, setMarkersWithLayers] = useState(new Map());
  const [loadedMap, setLoadedMap] = useState(false);

  const mapNodeCB = useCallback(
    (mapNode) => {
      if (mapNode && !loadedMap) {
        const map = mapNode.getMap();
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
    console.log(
      "++qwer registerMarker",
      markerWithLayer.marker,
      markerWithLayer.layerOrder
    );
    setMarkersWithLayers((prevMarkers) => {
      const newMarkers = new Map(prevMarkers);
      newMarkers.set(markerWithLayer.marker, markerWithLayer.layerOrder);
      return newMarkers;
    });
  }, []);

  return (
    <MapContext.Provider value={{ map: loadedMap, registerMarker }}>
      <MapboxMap
        ref={mapNodeCB}
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
    </MapContext.Provider>
  );
};

export default CustomMap;
