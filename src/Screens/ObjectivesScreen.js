import React, { useState } from "react";
import styled from "styled-components";
import CameraIcon from "../icons/camera";
import NotificationsIcon from "../icons/notification";
import {
  Container,
  Header,
  Title,
  Content,
  Label,
  Input,
  Button,
  Terms,
  AppHeader,
  SectionTitle,
} from "../Layout";
import PersonMarker from "../PersonAvatar";
import GearIcon from "../icons/gear";
import MainHeader from "../MainHeader";
import ChekmarkIcon from "../icons/checkmark";
import RightArrowIcon from "../icons/right-arrow";
import Legal from "../Legal";
import BottomTabMenu from "../BottomTabMenu";
import objectivesData from "../objectives";
import LogItScreen from "./LogItScreen";
import { debug } from "../utils";

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

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

const ObjectiveTitle = styled.div`
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 10px;
`;

const ObjectiveDescription = styled.div`
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 400;
  line-height: 16px;
`;

const RightIcon = styled.div`
  float: right;
  & svg {
    fill: black;
    width: 28px;
  }
`;

const ObjectivesScreen = () => {
  const [selectedObjective, setSelectedObjective] = useState(null);
  if (selectedObjective) {
    return (
      <LogItScreen
        objectiveId={selectedObjective}
        onSave={() => setSelectedObjective(null)}
      />
    );
  }
  return (
    <ObjectivesList
      onSelectObjective={(objectiveId) => {
        debug({ objectiveId });
        setSelectedObjective(objectiveId);
      }}
    />
  );
};

const ObjectivesList = ({ onSelectObjective }) => {
  return (
    <>
      <Container>
        <MainHeader title="Objectives" />
        <Content>
          <SectionTitle>Record your debauchery</SectionTitle>

          <CardList>
            {objectivesData.map((objective, index) => (
              <CardLine
                key={index}
                className={objective.completed ? "active" : ""}
                onClick={() => onSelectObjective(objective.id)}
              >
                <ObjectiveTitle>
                  {objective.title}{" "}
                  <RightIcon>
                    {objective.completed ? (
                      <ChekmarkIcon />
                    ) : (
                      <RightArrowIcon />
                    )}
                  </RightIcon>
                </ObjectiveTitle>
                <ObjectiveDescription>
                  {objective.points} pts - {objective.description}
                </ObjectiveDescription>
              </CardLine>
            ))}
          </CardList>

          <Legal />
        </Content>
      </Container>
      <BottomTabMenu />
    </>
  );
};

export default ObjectivesScreen;
