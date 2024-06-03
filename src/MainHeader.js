import React from "react";
import { AppHeader } from "./Layout";
import GearIcon from "./icons/gear";
import NotificationsIcon from "./icons/notification";
import styled from "styled-components";
import { useRouter } from "./Router";

const IconWrapper = styled.div`
  & svg {
    fill: #7f7f7f;
  }

  &.active svg {
    fill: black;
  }
`;

const MenuButton = ({ onclick, isActive, children }) => (
  <IconWrapper className={isActive ? "active" : ""} onClick={onclick}>
    {children}
  </IconWrapper>
);

const MainHeader = ({ title = "barcrawl" }) => {
  const { isCurrentPage, goto } = useRouter();
  return (
    <AppHeader
      title={title}
      leftIcon={
        <MenuButton
          isActive={isCurrentPage("settings")}
          onclick={() => {
            goto("settings");
          }}
        >
          <GearIcon />
        </MenuButton>
      }
      rightIcon={
        <MenuButton
          isActive={isCurrentPage("notifications")}
          onclick={() => {
            goto("notifications");
          }}
        >
          <NotificationsIcon />
        </MenuButton>
      }
    />
  );
};

export default MainHeader;
