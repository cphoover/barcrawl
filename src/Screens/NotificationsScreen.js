import React from "react";
import styled from "styled-components";
import CameraIcon from "../icons/camera";
import { Container, Content, Terms, AppHeader } from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";

const NotificationsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationLine = styled.li`
  & svg {
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
  color: #121212;
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 500;
  // height: 48px;

  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 14px;
  border-radius: 24px;
  box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);
  &.active {
    background-color: black;
    color: white;
    box-shadow: none;
    & svg {
      fill: white;
    }
  }
`;

const getIcon = (type, objectiveType) => {
  switch (type) {
    case "objective-complete":
      switch (objectiveType) {
        case "bar":
          return <CameraIcon />;
        case "shot-malort":
          return <CameraIcon />;
        case "shot-tequila":
          return <CameraIcon />;
        case "doppleganger-photo":
          return <CameraIcon />;
        default:
          return null;
      }
    default:
      return null;
  }
};

const notifications = [
  {
    type: "objective-complete",
    objectiveType: "bar",
    message: "John just visited 5 bars in a row!",
    isMyAction: true,
  },
  {
    type: "objective-complete",
    objectiveType: "shot-malort",
    message: "Jane just took a shot of Malort!",
  },
  {
    type: "objective-complete",
    objectiveType: "shot-tequila",
    message: "John just took a shot of Tequila!",
    isMyAction: true,
  },
  {
    type: "objective-complete",
    objectiveType: "doppleganger-photo",
    message: "Jill just took a photo with her doppleganger!",
  },
];

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const NotificationsPage = () => {
  return (
    <>
      <Container>
        <MainHeader title="Notifications" />
        <Content>
          <NotificationsList>
            {notifications.map((notification, index) => {
              return (
                <NotificationLine
                  key={index}
                  className={notification.isMyAction ? "active" : ""}
                >
                  {getIcon(notification.type, notification.objectiveType)}
                  {notification.message}
                  &nbsp; 💩
                </NotificationLine>
              );
            })}
          </NotificationsList>
          <Terms>Terms of Service | Privacy Policy</Terms>
        </Content>
      </Container>
      <BottomTabMenu />
    </>
  );
};

export default NotificationsPage;
