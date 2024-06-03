import React, { useState } from "react";
import { supabase } from "./db";
import { getUserId } from "./utils";

const Register = ({ onRegistered }) => {
  const  userId = getUserId(); // Get the user ID
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
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
      console.log("Error uploading file: ", uploadError);
      alert("Upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }
console.log('uploadData', uploadData)
    // Save user data to your table
    const { data, error } = await supabase
      .from("users")
      .upsert([{ user_id: userId, avatar_path: uploadData.fullPath }]);

    setUploading(false);

    console.log({ data, error });

    if (error) {
      alert("Error registering user: " + error.message);
    } else {
      console.log("User registered:", data);
      // onRegistered(data[0]);
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter username"
        value={userId}
      /> */}
      {/* <input type="" */}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <button onClick={registerUser}>Register</button>
      )}
    </div>
  );
};

export default Register;
