import React, { useState } from "react";
import styled from "styled-components";
import CameraIcon from "../icons/camera";
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
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import Legal from "../Legal";
import { useOtherUsers } from "../Providers/OtherUsersProvider";
import { useMyUser } from "../Providers/MyUserProvider";
import { useCompletions } from "../Providers/CompletionsProvider";
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

// const scoreData = [
//   {
//     name: "John Doe",
//     score: 100,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "Jane Doe",
//     score: 90,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "John Smith",
//     score: 80,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "Jane Smith",
//     score: 70,
//     myAction: true,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "John Johnson",
//     score: 60,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "Jane Johnson",
//     score: 50,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "John Brown",
//     score: 40,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
//   {
//     name: "Jane Brown",
//     score: 30,
//     photoUrl: "https://picsum.photos/200?asdf" + Math.random(),
//   },
// ];

const LeaderboardScreen = () => {
  const { otherUsersPositions, otherUsersDetails, UserHelpers } =
    useOtherUsers();

  const { userId: myUserId } = useMyUser();
  const { userScores } = useCompletions();
  debug("userScores", userScores);

  const usersArray = [...otherUsersDetails].map((x) => x[1]);

  return (
    <>
      <Container>
        <MainHeader title="Leaderboard" />
        <Content>
          {/* <SectionTitle>Leaderboard</SectionTitle> */}

          <CardList>
            {userScores.map((user, index) => (
              <CardLine
                key={user.userId}
                className={user.userId === myUserId ? "active" : ""}
              >
                <ScoreWrapper>
                  <PhotoWrapper>
                    <PersonMarker photoUrl={user.avatarSmall} />
                  </PhotoWrapper>
                  <ScoreDetails>
                    <PersonName>{user.username}</PersonName>
                    <Score>Score: {user.scores} points</Score>
                  </ScoreDetails>
                </ScoreWrapper>
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

export default LeaderboardScreen;
