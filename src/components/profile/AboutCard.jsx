import React from "react";
import Classes from "./infoCard.module.css";
import { MdModeEdit } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationPin, MdOutlineVerifiedUser } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import Review from "./Review";

const AboutCard = (props) => {
  return (
    <div className={Classes.profile}>
      <div className={Classes.image}>
        {props.profileData.image ? (
          <img src={props.profileData.image} alt="Profile-Image" />
        ) : (
          <img
            className={Classes.profilePhoto}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAM1BMVEXh4eGjo6OgoKDk5OTW1tbGxsadnZ21tbXJycm5ubnZ2dmmpqapqamxsbHMzMzc3Ny/v78ZOypQAAACeElEQVRoge2a25KDIBBEkQHkKvz/1y7mHqOiwJDUFv2QPJ5qwIFpIKSrq6urq6vrVwXw/G3GJIyr0blRcUZakUEHSykdouKfDboFGLy6Iu+iVHl0MEzDG/QCHiZkLgSxhM4SAZUL44fVm+ERkQthgxq5eH5BblIjV2Jx/TZ0lsehbk4s7vTq1UX8lNAY1J31dLOLsqpgHzoLA8sSYxxHmdWnAk+McRxlXt8uqDRWIWDH9NwifELg0liHgLVprP03bsmRJVWf+qUP6EvlgkDaLUpNTk0uRrWI8qmND2ef/9I2T/w+FulQ860j3N6qQlpPN20fzxGhZKtEYpTFN4Fca70wquKCq8d3MB3GNh0uU+bZVhvFmvXzhPHRRo0NQ4Qr+aaWzK6urq5jehSoZpUqQjyTwVlDRRQ11gXJPCobiJbKUrFMWAW1SmqUPSG6nNQ9Rl45XtCInnxl00CmuLmnuoK44U8VPYMOJsW8k02tMD0eJj6PTzvkocZx4yOjP2K5PMXnZ6FXMC+z6jKgF7DLNwzszKQuuEPuDMOUDb2A865LCqm5XF0GnZWRayd690N2M/p7VkyN3NOJ0YEc9wD2fK99INlMy56lElMDa85SD0SMaWWEkJBbF1+oOUGvLx5mk5NUQeknRPOqMshklLsnkZuPAS/givz0poBbQC3gFlET6ea2inPPtQcPSWiFBxGgz9YN6uoclcO5c3KowSRz4ThumLqKWeBarrputW6GDsCH9PXTwKv3uQCTFXt3BcJOKM01vDyUWiCvz6bw7iguia6J/fwjT6bCtMh3oyfNZJjfpM2v0oJkutmTuEdE0hPlrq6urq6u39Uf4HgXAqr221QAAAAASUVORK5CYII="
            alt="Profile-Image"
          />
        )}
      </div>
      <p className={Classes.name}>
        {props.profileData.first_name} {props.profileData.last_name}
        <br />
      </p>
      <p className={Classes.location}>
        <MdLocationPin /> {props.profileData.country}
      </p>
      <p className={Classes.email}>
        <AiTwotoneMail /> {props.profileData.contact_person_email}
      </p>
      <p className={Classes.college}>
        <FaGraduationCap /> {props.profileData.education}
      </p>
      <p className={Classes.languages}>Speaks:{props.profileData.languages}</p>

      <p className={Classes.designation}>{props.profileData.description}</p>

      <a className={Classes.editIntro} href="#">
        <MdModeEdit /> edit
      </a>
      <hr className={Classes.horizontalLine} />
      <div className={Classes.reviewsResLargeScreens}>
        <Review  reviews={props.reviews} />
      </div>
      {/* <div className={Classes.about}>
        <p>About</p>
        <a href="#">
          <i className="fas fa-pen stroke-transparent-blue"></i>
        </a>
      </div>
      <p className={Classes.yearGraduation}>
        Expected Year of Graduation
        <br />
        <strong>March, 2014</strong>
      </p>
      <p className={Classes.education}>
        Education
        <br />
        <strong>
          Doctorate, Indian Institute of Information Technology-Allahabad
        </strong>
      </p>
      <p className={Classes.moreAbout}>
        More about me
        <br />
        <span>DUGC of Computer Science & Engineering Department</span>
      </p>
      <p className={Classes.telephone}>
        Telephone
        <br />
        <strong>0532-2271351</strong>
      </p>
      <p className={Classes.fax}>
        Fax
        <br />
        <strong>+91-532-25453441</strong>
      </p> */}
    </div>
  );
};

export default AboutCard;
