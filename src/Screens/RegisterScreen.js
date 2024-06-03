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
} from "../Layout";

const FileInputContainer = styled.div`
  margin-top: 11px;
  width: 171px;
  height: 40px;
  padding: 8px;
  border: 1px solid #121212;
  border-radius: 24px;
  background-color: #ffffff;
  color: #121212;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 19px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePreview = styled.img`
  width: 50px;
  margin-top: 20px;
`;

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <AppHeader
        title="barcrawl"
        />

      <Content>
        <Label htmlFor="username">User Name</Label>
        <Input
          id="username"
          type="text"
          placeholder="Enter your user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Avatar Photo</Label>
        <FileInputContainer as="label">
          <CameraIcon />
          &nbsp;&nbsp;Upload Photo
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </FileInputContainer>
        {avatar && <ImagePreview src={avatar} alt="Avatar Preview" />}
        <Button
          disabled={!username || !avatar}
          onClick={() => console.log("Registration process...")}
        >
          {!username || !avatar
            ? "Please fill out the form"
            : "Start the game!"}
        </Button>
        <Terms>Terms of Service | Privacy Policy</Terms>
      </Content>
    </Container>
  );
};

export default SignupPage;
