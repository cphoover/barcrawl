import { useCallback, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useMap } from "./CustomMap"; // Adjust the path according to your file structure
import { createPortal } from "react-dom";

const CustomMarker = ({
  icon,
  layerOrder = 0,
  latitude,
  longitude,
  onClick,
}) => {
  const { registerMarker } = useMap();
  const iconContainerRef = useRef(document.createElement("div"));
  // const iconContainerRef = useRef(null);
  const markerRef = useRef(null);

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation(); // Prevent the event from bubbling up to the map
      onClick(e);
    },
    [onClick]
  );

  useEffect(() => {
    
    if (markerRef.current) {
      return;
    }
    const el = iconContainerRef.current;
    el.style.cursor = "pointer";

    const marker = new mapboxgl.Marker(el).setLngLat([longitude, latitude]);

    el.addEventListener("click", handleClick);

    markerRef.current = marker;
    registerMarker({ marker, layerOrder }); 

    return () => {
      // el.removeEventListener("click", handleClick);
      marker.remove();
    };
  }, []);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat([longitude, latitude]);
    }
  }, [latitude, longitude]);

  return icon ? createPortal(icon, iconContainerRef.current) : null;
};

export default CustomMarker;
