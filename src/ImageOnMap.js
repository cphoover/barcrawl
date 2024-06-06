import React, { useState, useCallback } from "react";
import styled from "styled-components";
import CustomMap from "./CustomMap"; // Adjust the path according to your file structure
import CustomMarker from "./CustomMarker"; // Adjust the path according to your file structure
import { Popup } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY3Bob292ZXIiLCJhIjoiY2x3amhsMXZlMTFjdDJpcW5rb3Z1bWw3bSJ9.zim9MR8_RVDNiVDmw5E4-Q"; // Replace with your Mapbox token

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const ToggleButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 10px;
  left: 10px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
`;

const StateDisplay = styled.div`
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 10px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 5px 10px;
`;

const MapWithMarkersInstance = () => {
  const [zIndexOrder, setZIndexOrder] = useState(true);
  const [currentPopup, setCurrentPopup] = useState(null);

  const markersData = [
    {
      id: 1,
      longitude: -77.0535,
      latitude: 38.8875,
      src: "/images/vector-markers/boobs.svg",
      zIndex: 1,
      content: <div>Marker 1</div>,
    },
    {
      id: 2,
      longitude: -77.053,
      latitude: 38.8875,
      src: "/images/vector-markers/food.svg",
      zIndex: 0,
      content: <div>Marker 2</div>,
    },
  ];

  const handleMarkerClick = useCallback((markerData) => {
    setCurrentPopup(markerData);
  }, []);

  return (
    <Container>
      {/* Current Popup Latitude: {currentPopup?.latitude} <br />
      <hr />
      Current Popup Longitude: {currentPopup?.longitude} <br />
      <hr />
      Current Popup Content: {currentPopup?.content} <br /> */}
      <hr />
      <CustomMap
        initialViewState={{
          latitude: 38.8875,
          longitude: -77.0535,
          zoom: 10,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{ width: "100%", height: "100%" }}
      >
        {markersData.map((markerData) => (
          <CustomMarker
            key={markerData.id}
            iconURL={markerData.src}
            layerOrder={markerData.zIndex}
            latitude={markerData.latitude}
            longitude={markerData.longitude}
            onClick={() => handleMarkerClick(markerData)}
          />
        ))}
        {Boolean(currentPopup) && (
          <Popup
            latitude={currentPopup?.latitude}
            longitude={currentPopup?.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setCurrentPopup(null)}
            anchor="top"
          >
            <div>{currentPopup?.content}</div>
          </Popup>
        )}
      </CustomMap>
    </Container>
  );
};

export default MapWithMarkersInstance;
