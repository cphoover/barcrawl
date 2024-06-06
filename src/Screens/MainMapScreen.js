import React, { useEffect, useState } from "react";
import CustomMap from "../CustomMap";
// import CustomMap from "../ZIndexMap";
import styled from "styled-components";
import "../App.css";
import { locations } from "../location-data";
import MyLocationMarker from "../MyLocationMarker";
import OtherUsersMarkers from "../OtherUsersMarkers";
import Marker from "../CustomMarker";
import { Popup } from "react-map-gl";
import { getMapMarker, getUserId } from "../utils";
import { supabase } from "../db";
import { AppHeader, Container } from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import { useMapFilters } from "../Providers/MapFiltersProvider";
import CompletionMarkers from "../CompletionMarkers";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function MainMapScreen() {
  // const [onlineUsers, setOnlineUsers] = useState(new Set()); // Use a Set for online users

  const {
    selectedLocation,
    setSelectedLocation,
    filteredLocations,
  } = useMapFilters();

  return (
    <>
      <Container>
        <MainHeader title="barcrawl" />

        <Wrapper>
      
          <CustomMap>
            {filteredLocations.map((location, idx) => (
              <Marker
                key={location.id}
                latitude={location.Lat}
                longitude={location.Lon}
                onClick={() => setSelectedLocation(location)}
                layerOrder={0}
                icon={
                  <img src={getMapMarker(location.Category)} alt="marker" />
                }
              />
            ))}
            {selectedLocation && (
              <Popup
                latitude={selectedLocation.Lat}
                longitude={selectedLocation.Lon}
                onClose={() => setSelectedLocation(null)}
                closeOnClick={false}
              >
                <div>
                  <h3>{selectedLocation.Name}</h3>
                  <p>{selectedLocation.Type}</p>
                  <p>{selectedLocation.Price}</p>
                </div>
              </Popup>
            )}

            <MyLocationMarker />
            <CompletionMarkers />
            <OtherUsersMarkers />
          </CustomMap>
        </Wrapper>
      </Container>
      <BottomTabMenu />
    </>
  );
}

export default MainMapScreen;
