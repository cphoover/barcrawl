import React, { createContext, useContext, useState, useEffect } from "react";
import { locations } from "../location-data";

const defaultFilters = {
  neighborhood: "",
  type: "",
  price: "",
  category: "",
};

const MapFiltersContext = createContext();

export function useMapFilters() {
  return useContext(MapFiltersContext);
}

export function MapFiltersProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);
  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    setFilteredLocations(
      locations.filter(
        (location) =>
          (filters.neighborhood === "" || location.Neighborhood === filters.neighborhood) &&
          (filters.type === "" || location.Type === filters.type) &&
          (filters.price === "" || location.Price === filters.price) &&
          (filters.category === "" || location.Category === filters.category)
      )
    );
  }, [filters]);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => setFilters(defaultFilters);

  const uniqueValues = (key) => [...new Set(locations.map((loc) => loc[key]))];

  return (
    <MapFiltersContext.Provider value={{
      selectedLocation,
      setSelectedLocation,
      filters,
      handleFilterChange,
      clearFilters,
      uniqueValues,
      filteredLocations,
      applyFilters
    }}>
      {children}
    </MapFiltersContext.Provider>
  );
}