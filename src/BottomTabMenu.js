import React from "react";
import styled from "styled-components";
import MapIcon from "./icons/map";
import CameraIcon from "./icons/camera";
import TrophyIcon from "./icons/trophy";
import { useRouter } from "./Router";

const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: #7f7f7f;
  & svg {
    fill: #7f7f7f;
  }

  &.active {
    color: black;
    svg {
      fill: black;
    }
  }
`;

const IconContainer = styled.div`
  margin-bottom: 5px;
`;

const TabLabel = styled.span`
  font-size: 12px;
`;

function BottomTabMenu() {
  const { isCurrentPage, goto } = useRouter();
  return (
    <TabBarContainer>
      <TabItem
        className={isCurrentPage("map") ? "active" : ""}
        onClick={() => {
          goto("map");
        }}
      >
        <IconContainer>
          <MapIcon />
        </IconContainer>
        <TabLabel>Map</TabLabel>
      </TabItem>
      <TabItem className={isCurrentPage("leaderboard") ? "active" : ""}
        onClick={() => {
          goto("leaderboard");
        }}
      >
        <IconContainer>
          <TrophyIcon />
        </IconContainer>
        <TabLabel>Rankings</TabLabel>
      </TabItem>
      <TabItem className={isCurrentPage("photos") ? "active" : ""}
        onClick={() => {
          goto("photos");
        }}
      >
        <IconContainer>
          <CameraIcon />
        </IconContainer>
        <TabLabel>Photos</TabLabel>
      </TabItem>
    </TabBarContainer>
  );
}

export default BottomTabMenu;
