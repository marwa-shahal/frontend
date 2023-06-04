import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CookieService from "../../services/cookie.service";
import axios from "axios";
import { AiTwotoneMail } from "react-icons/ai";
import Classes from "./user.module.css";

function UserProfile() {
  const [userData, setUserData] = useState([]);
  const { userId } = useParams();
  console.log(userId);
  const currentUser = JSON.parse(localStorage.getItem("userData"));
  // let teacherId;
  // if (currentUser && currentUser._id) {
  //   teacherId = currentUser._id;
  //   console.log(teacherId);
  // }
  const fetchProfileData = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + CookieService.get("token"),
      },
    };
    try {
      const response = await axios.get(
        `https://edushadows-backend.onrender.com/user/${userId}`,
        config
      );
      console.log("User data fetched successfully: ", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const updateTeacherProfileAboutData = async (updatedData) => {
    const config = {
      headers: {
        Authorization: "Bearer " + CookieService.get("token"),
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(updatedData);
    try {
      const response = await axios.patch(
        `https://edushadows-backend.onrender.com/user/${userId}`,
        updatedData,
        config
      );
      console.log("User data updated successfully: ", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("Error updating user data: ", error);
    }
  };

  const updateTeacherProfileData = async (updatedData) => {
    const config = {
      headers: {
        Authorization: "Bearer " + CookieService.get("token"),
        // "Content-Type": "multipart/form-data",
      },
    };
    console.log(updatedData);
    try {
      const response = await axios.patch(
        `https://edushadows-backend.onrender.com/user/${userId}`,
        updatedData,
        config
      );
      console.log("User data updated successfully: ", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("Error updating user data: ", error);
    }
  };

  // const fetchReviews = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://edushadows-backend.onrender.com/review/teacher/` + userId
  //     );
  //     console.log("Reviews fetched successfully: ", response.data);
  //     setReviews(response.data);
  //   } catch (error) {
  //     console.error("Error fetching latest events: ", error);
  //   }
  // };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className={Classes.profileContainer}>
      <div className={Classes.container}>
        <div>
          <div className={Classes.profile}>
            <div className={Classes.image}>
              {userData.image ? (
                <img src={userData.image} alt="Profile-Image" />
              ) : (
                <img
                  className={Classes.profilePhoto}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAM1BMVEXh4eGjo6OgoKDk5OTW1tbGxsadnZ21tbXJycm5ubnZ2dmmpqapqamxsbHMzMzc3Ny/v78ZOypQAAACeElEQVRoge2a25KDIBBEkQHkKvz/1y7mHqOiwJDUFv2QPJ5qwIFpIKSrq6urq6vrVwXw/G3GJIyr0blRcUZakUEHSykdouKfDboFGLy6Iu+iVHl0MEzDG/QCHiZkLgSxhM4SAZUL44fVm+ERkQthgxq5eH5BblIjV2Jx/TZ0lsehbk4s7vTq1UX8lNAY1J31dLOLsqpgHzoLA8sSYxxHmdWnAk+McRxlXt8uqDRWIWDH9NwifELg0liHgLVprP03bsmRJVWf+qUP6EvlgkDaLUpNTk0uRrWI8qmND2ef/9I2T/w+FulQ860j3N6qQlpPN20fzxGhZKtEYpTFN4Fca70wquKCq8d3MB3GNh0uU+bZVhvFmvXzhPHRRo0NQ4Qr+aaWzK6urq5jehSoZpUqQjyTwVlDRRQ11gXJPCobiJbKUrFMWAW1SmqUPSG6nNQ9Rl45XtCInnxl00CmuLmnuoK44U8VPYMOJsW8k02tMD0eJj6PTzvkocZx4yOjP2K5PMXnZ6FXMC+z6jKgF7DLNwzszKQuuEPuDMOUDb2A865LCqm5XF0GnZWRayd690N2M/p7VkyN3NOJ0YEc9wD2fK99INlMy56lElMDa85SD0SMaWWEkJBbF1+oOUGvLx5mk5NUQeknRPOqMshklLsnkZuPAS/givz0poBbQC3gFlET6ea2inPPtQcPSWiFBxGgz9YN6uoclcO5c3KowSRz4ThumLqKWeBarrputW6GDsCH9PXTwKv3uQCTFXt3BcJOKM01vDyUWiCvz6bw7iguia6J/fwjT6bCtMh3oyfNZJjfpM2v0oJkutmTuEdE0hPlrq6urq6u39Uf4HgXAqr221QAAAAASUVORK5CYII="
                  alt="Profile-Image"
                />
              )}
            </div>
            <p className={Classes.name}>
              {userData.first_name} {userData.last_name}
              <br />
            </p>
            <p className={Classes.email}>
              <AiTwotoneMail /> {userData.email}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
