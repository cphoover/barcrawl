import React from "react";
// import CustomMap from "../ZIndexMap";
import "../App.css";
import { getMapMarker } from "../utils";

function getPlaceMarkers({  filteredLocations }) {
  return filteredLocations.map((location, idx) => ({
    marker: <img src={getMapMarker(location.Category)} alt="marker" />,
    location,
    idx,
  }));
}

export default getPlaceMarkers;
