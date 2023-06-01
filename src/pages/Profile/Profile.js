import React from "react";
import InfoCard from "../../components/profile/InfoCard";
import AboutCard from "../../components/profile/AboutCard";
import Classes from "./profile.module.css";

function Profile() {
  return (
    <div className={Classes.profileContainer}>
      <div className={Classes.container}>
        <AboutCard />
        <InfoCard />
      </div>
    </div>
  );
}

export default Profile;
