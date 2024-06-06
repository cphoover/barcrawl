import React from "react";
// import CustomMap from "../CustomMap";
import CustomMap from "../OGMap";
import styled from "styled-components";
import "../App.css";
import MyLocationMarker from "../MyLocationMarker";
import OtherUsersMarkers from "../OtherUsersMarkers";
import { Marker } from "react-map-gl";
import { Popup } from "react-map-gl";
import { Container } from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import { useMapFilters } from "../Providers/MapFiltersProvider";
import getPlaceMarkers from "../marker-utils/getPlaceMarkers";
import getOtherUsersMarkers from "../marker-utils/getOtherUsersMarkers";
import { useOtherUsers } from "../Providers/OtherUsersProvider";
import { useLocation } from "../Providers/LocationProvider";
import BlinkMarker from "../BlinkMarker";
import { useOnlineUsers } from "../Providers/OnlineUsersProvider";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function MainMapScreen() {
  // const [onlineUsers, setOnlineUsers] = useState(new Set()); // Use a Set for online users

  const { selectedLocation, setSelectedLocation, filteredLocations } =
    useMapFilters();

  const { otherUsers } = useOtherUsers();

  const onlineUsers = useOnlineUsers();

  const position = useLocation();
  debug("position", position);

  return (
    <>
      <Container>
        <MainHeader title="barcrawl" />

        <Wrapper>
          <CustomMap>
             {[
              ...getPlaceMarkers({ filteredLocations }).map(
                ({ marker, location }) => (
                  <Marker
                    key={JSON.stringify(marker.props.location)}
                    latitude={location.Lat}
                    longitude={location.Lon}
                    onClick={() => setSelectedLocation(location)}
                  >
                    {marker}
                  </Marker>
                )
              ),
              ...getOtherUsersMarkers({
                onlineUsers,
                otherUsers,
              }).map(({ marker, user }) => (
                <Marker
                  key={JSON.stringify(marker.props.location)}
                  latitude={user.latitude}
                  longitude={user.longitude}
                >
                  {marker}
                </Marker>
              )),
              (position ? (
                <Marker
                  key="my-location"
                  latitude={position[0]}
                  longitude={position[1]}
                >
                  <BlinkMarker />
                </Marker>
              ) : (
                []
              )),
            ]} 

        
{/* 
            <MyLocationMarker />

            <OtherUsersMarkers /> */}
          </CustomMap>
        </Wrapper>
      </Container>
      <BottomTabMenu />
    </>
  );
}

export default MainMapScreen;
