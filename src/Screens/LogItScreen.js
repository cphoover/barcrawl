import React, { useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import GoalMenuButton from "../GoalMenuButton";
import CameraIcon from "../icons/camera";
import { supabase } from "../db";
import { debug, getUserId } from "../utils";
import { useLocation } from "../Providers/LocationProvider";
import { useRouter } from "../Router";
import { getObjectiveById } from "../objectives";

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
  height: 115px;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 24px;
  background-color: #ffffff;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 19px;
  outline: none;
  box-sizing: border-box;
`;

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ImagePreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 10px;
`;

const CameraButton = styled.label`
  cursor: pointer;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);
`;

const SaveButton = styled.button`
  cursor: pointer;
  width: 335px;
  height: 46px;
  border-radius: 24px;
  background-color: #121212;
  background-color: ${(props) => (props.enabled ? "#121212" : "#cccccc")};
  color: #ffffff;
  color: ${(props) => (props.enabled ? "#ffffff" : "#666666")};
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 21px;
  outline: none;
  disabled: ${(props) => (!props.enabled ? "disabled" : "")};
`;

const LogItScreen = ({ objectiveId, onSave }) => {
  const { goto } = useRouter();
  const [notes, setNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const userId = getUserId();
  const position = useLocation();

  const objective = getObjectiveById(objectiveId);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const uploadPhoto = async () => {
    const fileExt = photo.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;
    const { error: uploadError, data: uploadData } = await supabase.storage
      .from("images")
      .upload(filePath, photo);

    if (uploadError) {
      alert("Upload failed: " + uploadError.message);
      return null;
    }
    return uploadData.path;
  };

  const disabled = !notes && !photo;
  const handleSave = async () => {
    if (disabled) return;
    setIsSaving(true);
    if (!position) {
      alert(
        "Location not available. Please enable location services and try again."
      );
    }

    const [latitude, longitude] = position;

    if (!photo && !notes) return;

    let photoUrl = "";

    const payload = {
      user_id: userId,
      notes: notes,
      completion_id: objectiveId,
      latitude,
      longitude,
    };

    if (photo) {
      const photoPath = await uploadPhoto();
      // Fetch both URLs concurrently after the upload is successful
      const [fullUrlRes, smallUrlRes] = await Promise.all([
        supabase.storage.from("images").getPublicUrl(photoPath),
        supabase.storage.from("images").getPublicUrl(photoPath, {
          transform: {
            width: 100,
            height: 100,
          },
        }),
      ]);

      const { data: fullUrlData, error: fullUrlError } = fullUrlRes;
      const { data: smallUrlData, error: smallUrlError } = smallUrlRes;

      if (fullUrlError || smallUrlError) {
        alert("Failed to get photo URLs");
        console.error({ fullUrlError, smallUrlError });
        return;
      }

      payload.photo_url = fullUrlData.publicUrl;
      payload.photo_small = smallUrlData.publicUrl;
    }

    const { data, error } = await supabase
      .from("completions")
      .insert([payload]);
    if (error) {
      setIsSaving(false);
      alert("Failed to save data: " + error.message);
    } else {
      debug("Data saved:", data);
      setIsSaving(false);
      setTimeout(() => goto("map"), 0);
      onSave();
    }
  };

  return (
    <>
      <Container>
        <MainHeader title="Check It Off" />
        <Content>
          <TopSection>
            <GoalMenuButton isMap={false} />
            <Title>{objective.title}</Title>
            <Description>{objective.description}</Description>
            <br />
            <NotesInput
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <br />
            <PhotoWrapper>
              {preview && <ImagePreview src={preview} alt="Preview" />}
              <CameraButton>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <CameraIcon width="40px" />
              </CameraButton>
            </PhotoWrapper>
            <br />
            <SaveButton
              onClick={handleSave}
              enabled={!disabled}
              disabled={disabled}
            >
              {isSaving ? "Saving..." : "Save"}
            </SaveButton>
          </TopSection>
        </Content>
      </Container>
      <BottomTabMenu />
    </>
  );
};

export default LogItScreen;
