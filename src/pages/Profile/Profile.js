import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CookieService from "../../services/cookie.service";
import axios from "axios";
import InfoCard from "../../components/profile/InfoCard";
import AboutCard from "../../components/profile/AboutCard";
import Classes from "./profile.module.css";

function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [reviews, setReviews] = useState([]);
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
      setProfileData(response.data);
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
      setProfileData(response.data);
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
      setProfileData(response.data);
    } catch (error) {
      console.error("Error updating user data: ", error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `https://edushadows-backend.onrender.com/review/teacher/` + userId
      );
      console.log("Reviews fetched successfully: ", response.data);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching latest events: ", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
    fetchReviews();
  }, []);

  return (
    <div className={Classes.profileContainer}>
      <div className={Classes.container}>
        <AboutCard
          profileData={profileData}
          reviews={reviews}
          updateTeacherProfileAboutData={updateTeacherProfileAboutData}
          updateTeacherProfileData={updateTeacherProfileData}
        />
        <InfoCard
          profileData={profileData}
          reviews={reviews}
          updateTeacherProfileAboutData={updateTeacherProfileAboutData}
          updateTeacherProfileData={updateTeacherProfileData}
        />
      </div>
    </div>
  );
}

export default Profile;
