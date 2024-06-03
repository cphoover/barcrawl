import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { locations } from "./location-data";
import MyLocationMarker from "./MyLocationMarker";
import OtherUsersMarkers from "./OtherUsersMarkers";
import { blueIcon } from "./icons";

// const MyLocationMarker = () => {
//   const [position, setPosition] = useState(null);
//   const map = useMap();

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition((pos) => {
//         const { latitude, longitude } = pos.coords;
//         setPosition([latitude, longitude]);
//         map.setView([latitude, longitude], 12);
//       });
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }, [map]);

//   return position === null ? null : (
//     <Marker position={position} icon={redIcon} zIndexOffset={1000}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// };

const MapViewControl = ({ setMapView }) => {
  useMapEvents({
    moveend: (e) => {
      const map = e.target;
      setMapView({ center: map.getCenter(), zoom: map.getZoom() });
    },
  });
  return null;
};

function App() {
  const [mapView, setMapView] = useState({
    center: [39.2904, -76.6122],
    zoom: 12,
  });

  const MapEvents = () => {
    useMapEvents({
      moveend: (e) => {
        const map = e.target;
        setMapView({ center: map.getCenter(), zoom: map.getZoom() });
      },
    });
    return null;
  };

  const [filters, setFilters] = useState({
    neighborhood: "",
    type: "",
    price: "",
    category: "",
  });

  const [filteredLocations, setFilteredLocations] = useState(locations);

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
    <div>
      <div className="filters">
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
      </div>
      <MapContainer
        // center={mapView.center}
        // zoom={mapView.zoom}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {filteredLocations.map((location, idx) => (
          <Marker
            key={idx}
            position={[location.Lat, location.Lon]}
            icon={blueIcon}
          >
            {/* <Popup>
              <b>{location.Name}</b>
              <br />
              {location.Type}
              <br />
              {location.Price}
            </Popup> */}
          </Marker>
        ))}
        <MyLocationMarker />
        <OtherUsersMarkers />
        <MapViewControl setMapView={setMapView} />
      </MapContainer>
    </div>
  );
}

export default App;
