import React, { useState } from "react";
import styled from "styled-components";
import { Container, Content, SectionTitle, Terms } from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import Legal from "../Legal";
import { useMapFilters } from "../Providers/MapFiltersProvider";
import { useRouter } from "../Router";
import { useEffect } from "react";
import { supabase } from "../db";
import { getUserId } from "../utils";
import { useMyUser } from "../Providers/MyUserProvider";

const SettingsSection = styled.div`
  background: white;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);
  z-index: 1000;
`;

const Select = styled.select`
  margin-bottom: 10px;
  width: 100%;
  border-radius: 10px;
  background: white;
  padding: 10px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);
`;

const PrimaryButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #007bff; /* Primary blue */
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const SecondaryButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: white;
  color: #007bff;
  border: 1px solid #007bff;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #e7f1ff; /* Light blue on hover */
  }
`;

const SettingsScreen = () => {
  const { myDetails } = useMyUser();
  const {
    applyFilters,
    clearFilters,
    uniqueValues,
    filters: currentFilters,
  } = useMapFilters();

  const { goto } = useRouter();
  const [tempFilters, setTempFilters] = useState(currentFilters);

  const handleLocalChange = (e) => {
    setTempFilters({
      ...tempFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleApplyFilters = () => {
    applyFilters(tempFilters);
    goto("map");
  };

  return (
    <>
      <Container>
        <MainHeader title="Settings" />
        <Content>
          <SectionTitle>User Profile</SectionTitle>
          <SettingsSection>
            {" "}
            <div>
              <strong>Username:</strong>
              <br /> {myDetails?.username}
            </div>
            <br />
            <div>
              <strong>Avatar:</strong>
              <br /> <img src={myDetails?.avatar_small} alt="avatar" />
            </div>
            <PrimaryButton onClick={() => goto("register")}>
              update
            </PrimaryButton>
          </SettingsSection>
          <SectionTitle>Map Filters</SectionTitle>

          <SettingsSection>
            <Select
              name="neighborhood"
              value={tempFilters.neighborhood}
              onChange={handleLocalChange}
            >
              <option value="">All Neighborhoods</option>
              {uniqueValues("Neighborhood").map((neighborhood, idx) => (
                <option key={idx} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </Select>
            <Select
              name="category"
              value={tempFilters.category}
              onChange={handleLocalChange}
            >
              <option value="">All Categories</option>
              <option value="hide-all">Hide All</option>
              {uniqueValues("Category").map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <Select
              name="type"
              value={tempFilters.type}
              onChange={handleLocalChange}
            >
              <option value="">All Types</option>
              {uniqueValues("Type").map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </Select>
            <Select
              name="price"
              value={tempFilters.price}
              onChange={handleLocalChange}
            >
              <option value="">All Prices</option>
              {uniqueValues("Price").map((price, idx) => (
                <option key={idx} value={price}>
                  {price}
                </option>
              ))}
            </Select>
            <SecondaryButton
              onClick={() => {
                clearFilters();
                setTempFilters(currentFilters);
                goto("map");
              }}
            >
              Clear Filters
            </SecondaryButton>{" "}
            <PrimaryButton onClick={handleApplyFilters}>
              Apply Filters
            </PrimaryButton>
          </SettingsSection>
          <Legal />
        </Content>
      </Container>
      <BottomTabMenu />
    </>
  );
};

export default SettingsScreen;
