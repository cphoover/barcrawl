import React, { useEffect, useState } from "react";
import CustomMap from "../CustomMap";
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
function MainMapScreen() {
  const [onlineUsers, setOnlineUsers] = useState(new Set()); // Use a Set for online users
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [filters, setFilters] = useState({
    neighborhood: "",
    type: "",
    price: "",
    category: "",
  });

  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    const userId = getUserId(); // Ensure you have a unique identifier for the user

    const presenceChannel = supabase
      .channel("presence", {
        config: {
          presence: {
            key: userId, // Ensure you use the userId as the presence key
          },
        },
      })
      .on("presence", { event: "sync" }, () => {
        const state = presenceChannel.presenceState();
        console.log("asdf sync state", state);
        setOnlineUsers(new Set(Object.keys(state)));
      })
      .on("presence", { event: "join" }, ({ key }) => {
        console.log("asdf join", { key });
        setOnlineUsers((prev) => new Set([...prev, key]));
      })
      .on("presence", { event: "leave" }, ({ key }) => {
        console.log("asdf leave", { key });
        setOnlineUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(key);
          return updated;
        });
      })
      .subscribe();
    const trackPayload = {
      id: userId, // Track the user's presence using their user_id
    };

    console.log({ trackPayload });
    presenceChannel.track(trackPayload);

    return () => {
      supabase.removeChannel(presenceChannel);
    };
  }, []);

  useEffect(() => {
    setFilteredLocations(
      locations.filter(
        (location) =>
          (filters.neighborhood === "" ||
            location.Neighborhood === filters.neighborhood) &&
          (filters.type === "" || location.Type === filters.type) &&
          (filters.price === "" || location.Price === filters.price) &&
          (filters.category === "" || location.Category === filters.category)
      )
    );
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const uniqueValues = (key) => [...new Set(locations.map((loc) => loc[key]))];

  return (
    <>
    <Container>
      <MainHeader title="barcrawl" />

      <Wrapper>
        {/* <div className="filters">
          <strong>myUserId:</strong> {getUserId()} <br />
          <strong>onlineUsers:</strong> {JSON.stringify([...onlineUsers])}
          <select name="neighborhood" onChange={handleFilterChange}>
            <option value="">All Neighborhoods</option>
            {uniqueValues("Neighborhood").map((neighborhood, idx) => (
              <option key={idx} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
          <select name="type" onChange={handleFilterChange}>
            <option value="">All Types</option>
            {uniqueValues("Type").map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select name="price" onChange={handleFilterChange}>
            <option value="">All Prices</option>
            {uniqueValues("Price").map((price, idx) => (
              <option key={idx} value={price}>
                {price}
              </option>
            ))}
          </select>
          <select name="category" onChange={handleFilterChange}>
            <option value="">All Categories</option>
            {uniqueValues("Category").map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div> */}

        <CustomMap>
          {filteredLocations.map(
            (location, idx) => (
              console.log({ location }),
              (
                <Marker
                  key={idx}
                  latitude={location.Lat}
                  longitude={location.Lon}
                  onClick={() => setSelectedLocation(location)}
                  layerOrder={0}
                  icon={
                    <img src={getMapMarker(location.Category)} alt="marker" />
                  }
                />
              )
            )
          )}
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

          <OtherUsersMarkers onlineUsers={onlineUsers} />
        </CustomMap>
      </Wrapper>
     
    </Container>
     <BottomTabMenu />
    </>
  );
}

export default MainMapScreen;
