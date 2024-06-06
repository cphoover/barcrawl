import React from "react";
import styled from "styled-components";
import { Container, Content } from "../Layout";
import PersonMarker from "../PersonAvatar";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import Legal from "../Legal";
import { useOtherUsers } from "../Providers/OtherUsersProvider";
import GoalMenuButton from "../GoalMenuButton";
import CameraIcon from "../icons/camera";

const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CardLine = styled.li`
  & svg {
    vertical-align: middle;
    margin-right: 8px;
    position: relative;
    top: -2px;
  }
  color: #121212;
  font-size: 12px;
  font-family: "Montserrat";
  font-weight: 500;
  // height: 48px;

  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 13px;
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

const ScoreWrapper = styled.div`
  display: flex;
`;

const PhotoWrapper = styled.div`
  width: fit-content;
  margin-right: 20px;
`;

const ScoreDetails = styled.div`
  flex: 1;
`;

const PersonName = styled.div`
  // color: #030303;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 24px;
`;

const Score = styled.div`
  // color: #030303;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 400;
  line-height: 21px;
  margin-top: 4px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #121212;
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: 700;
  line-height: 31px;
  text-align: center;
`;

const Description = styled.span`
  color: #121212;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 23px;
  text-align: center;
`;

const NotesInput = styled.textarea`
  width: 100%;
  height: 126px;
  padding: 20px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 24px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  color: #222222;
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 19px;
  outline: none;
`;

const CameraButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaveButton = styled.button`
  cursor: pointer;
  width: 335px;
  height: 46px;
  padding: 0px 8px;
  border: 0;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: #121212;
  color: #ffffff;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 21px;
  outline: none;
`;

const LogItScreen = () => {
  return (
    <>
      <Container>
        <MainHeader title="Check It Off" />
        <Content>
          <TopSection>
            <GoalMenuButton onMap={false} />
            <Title>Karaoke Star</Title>
            <Description>
              Sing a love song solo in a crowded karaoke bar.
            </Description>
            <br />
            <NotesInput placeholder="Notes" />
            <br />
            <CameraButton>
              <CameraIcon width="40px" />
            </CameraButton>
            <br />
            <SaveButton>Save</SaveButton>
          </TopSection>
        </Content>
      </Container>
      <BottomTabMenu />
    </>
  );
};

export default LogItScreen;
