import React, { useCallback, useEffect, useRef, useState } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY3Bob292ZXIiLCJhIjoiY2x3amhsMXZlMTFjdDJpcW5rb3Z1bWw3bSJ9.zim9MR8_RVDNiVDmw5E4-Q";

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

const MarkersWithZIndex = () => {
  const mapRef = useRef(null);
  const [zIndexOrder, setZIndexOrder] = useState(true);

  //   const mapCallback = useCallback((mapNode) => {
  //     if (!mapNode) return;
  //     console.log('++qwer mapNode', mapNode);
  //     const map = mapNode.getMap();

  //     map.on('load', () => {
  //       console.log('map loaded++');
  //       const markersData = [
  //         { id: 1, longitude: -77.0535, latitude: 38.8875, src: '/images/vector-markers/boobs.svg', zIndex: zIndexOrder ? 1 : 0 },
  //         { id: 2, longitude: -77.053, latitude: 38.8875, src: '/images/vector-markers/food.svg', zIndex: zIndexOrder ? 0 : 1 },
  //       ];

  //       markersData.forEach(markerData => {
  //         const el = document.createElement('div');
  //         el.style.backgroundImage = `url(${markerData.src})`;
  //         el.style.width = '24px';
  //         el.style.height = '24px';
  //         el.style.backgroundSize = 'contain';
  //         el.style.zIndex = markerData.zIndex;

  //         console.log('++qwer adding to map');

  //         new mapboxgl.Marker(el)
  //           .setLngLat([markerData.longitude, markerData.latitude])
  //           .addTo(map);
  //       });
  //     });
  //   });

  const mapNodeCB = useCallback((mapNode) => {
    if (!mapNode) return;

    console.log("++qwer mapNode", mapNode);
    const map = mapNode.getMap();
    console.log("++qwer map", map);

    // order matters here... last one will be on top
    const markersData = [
   
   
      {
        id: 2,
        longitude: -77.053,
        latitude: 38.8875,
        src: "/images/vector-markers/food.svg",
       
      },
      {
        id: 1,
        longitude: -77.0535,
        latitude: 38.8875,
        src: "/images/vector-markers/boobs.svg",
       
      },
    ];

    markersData.forEach((markerData, i) => {
      const el = document.createElement("img");
      el.src = markerData.src;
    ;
      el.style.backgroundSize = "contain";
      el.style.zIndex = markerData.zIndex;

      console.log("++qwer adding to map", i);

      new mapboxgl.Marker(el)
        .setLngLat([markerData.longitude, markerData.latitude])
        .addTo(map);
    });
  }, []);

  return (
    <Container>
      <ToggleButton onClick={() => setZIndexOrder(!zIndexOrder)}>
        Toggle Z-Index
      </ToggleButton>
      <StateDisplay>zIndexOrder: {zIndexOrder.toString()}</StateDisplay>
      <Map
        ref={mapNodeCB}
        initialViewState={{
          latitude: 38.8875,
          longitude: -77.0535,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      />
    </Container>
  );
};

export default MarkersWithZIndex;
