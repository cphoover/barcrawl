import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CameraIcon from "../icons/camera";
import {
  Container,
  Content,
  Label,
  Input,
  Button,
  Terms,
  AppHeader,
} from "../Layout";
import { debug, getUserId } from "../utils";
import { supabase } from "../db";
import { useRouter } from "../Router";
import { useMyUser } from "../Providers/MyUserProvider";
import BottomTabMenu from "../BottomTabMenu";

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
  width: 100%;
  margin-top: 20px;
`;

const SignupPage = () => {
  const { goto } = useRouter();
  const { iAmRegistered, myDetails, setMyDetails } = useMyUser();
  const [username, setUsername] = useState(myDetails?.username || "");
  const [avatar, setAvatar] = useState(myDetails?.avatar_url || null);
  const [photo, setPhoto] = useState(null);
  const userId = getUserId(); // Get the user ID
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (myDetails) {
      setUsername(myDetails.username || "");
      setAvatar(myDetails.avatar_url || null);
    }
  }, [myDetails]); // Dependency on myDetails to trigger update

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const registerUser = async () => {
    if (!photo) {
      alert("Please select a photo.");
      return;
    }

    setUploading(true);

    // Upload photo to Supabase Storage
    const fileExt = photo.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    let { error: uploadError, data: uploadData } = await supabase.storage
      .from("profile_pic")
      .upload(filePath, photo);

    if (uploadError) {
      debug("Error uploading file: ", uploadError);
      alert("Upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }
    debug("uploadData", uploadData);

    const [res1, res2] = await Promise.all([
      supabase.storage.from("profile_pic").getPublicUrl(uploadData.path),
      supabase.storage.from("profile_pic").getPublicUrl(uploadData.path, {
        transform: {
          width: 100,
          height: 100,
        },
      }),
    ]);

    const {
      data: { publicUrl },
      error,
    } = res1;

    const {
      data: { publicUrl: smallUrl },
      error: error2,
    } = res2;

    if (error || error2) {
      console.error("Error getting public URL: ", {
        error,
        error2,
      });
      alert("Failed to get public URL");
      setUploading(false);
      return;
    }

    debug("publicUrl", { publicUrl, smallUrl });

    const payload = {
      user_id: userId,
      username,
      avatar_url: publicUrl,
      avatar_small: smallUrl,
      registered: true,
    };
    // Save user data to your table
    const { data, error: registerError } = await supabase
      .from("users")
      .upsert([payload]);

    setUploading(false);

    debug({ data, error });

    if (registerError) {
      alert("Error registering user: " + registerError.message);
    } else {
      try {
      } catch (err) {
        console.error("could not refresh user data");
      }
      debug("User registered:", data);
      setMyDetails(payload);
      localStorage.setItem("user", JSON.stringify(data));
      setTimeout(() => goto("map"), 0);
      // onRegistered(data[0]);
    }
  };

  const startMsg = iAmRegistered ? "Update your profile!" : "Start the game!";
  return (
    <>
      <Container>
        <AppHeader title="barcrawl" />

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
            onClick={() => {
              registerUser();
            }}
          >
         
            {!username || !avatar
              ? "Please fill out the form"
              : startMsg }
          </Button>
          <Terms>Terms of Service | Privacy Policy</Terms>
        </Content>
        {myDetails?.registered && <BottomTabMenu />}
      </Container>
    </>
  );
};

export default SignupPage;
