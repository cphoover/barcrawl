import React from "react";
import {
  Container,
  Content,
  Terms,
} from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";










const SettingsScreen = () => {
  return (
    <>
    <Container>
      <MainHeader title="Settings" />
      <Content>
          some settings go here...
        <Terms>Terms of Service | Privacy Policy</Terms>
      </Content>
     
    </Container>
    <BottomTabMenu />
    </>
  );
};

export default SettingsScreen;
