import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Classes from "./shadowTeacherCard.module.css";
import ReviewModal from "../modal/ReviewModal";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationPin, MdOutlineVerifiedUser } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import MessageModal from "../message/Message";

const ShadowTeacherCard = ({
  first_name,
  last_name,
  email,
  contact_person_email,
  contact_person_phone,
  availability,
  city,
  country,
  education,
  certificates,
  description,
  experience,
  image,
  isValid,
  languages,
  previous_cases,
  role,
  reviews,
  _id,
}) => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleAddReviewClick = () => {
    setShowReviewModal(true);
  };

  const handleCloseModal = () => {
    setShowReviewModal(false);
  };
  const [averageRate, setAverageRate] = useState(0);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRate = reviews.reduce(
        (total, review) => total + review.rating,
        0
      );
      const averageRate = totalRate / reviews.length;
      setAverageRate(averageRate);
    }
  }, [reviews]);

  // const mouseEnter = (event, element) => {
  //   // element.style.transform = "rotateY(0deg) rotateX(0deg)";
  //   element.style.boxShadow = "0 0 0 0 rgba(0,0,0,1)";
  // };

  // const mouseMove = (event, element) => {
  //   const rect = element.getBoundingClientRect();
  //   const offsetX = event.clientX - rect.left;
  //   const offsetY = event.clientY - rect.top;
  //   const width = rect.width;
  //   const height = rect.height;
  //   const ratio = 0.25;
  //   const relativeOffsetX = ((offsetX * 100) / width) * ratio;
  //   const relativeOffsetY = ((offsetY * 100) / height) * ratio;

  //   // element.style.transform = `rotateY(${relativeOffsetX}deg) rotateX(${-relativeOffsetY}deg)`;
  //   element.style.boxShadow = `${-relativeOffsetX}px ${-relativeOffsetY}px 0 0 rgba(0,0,0,1)`;
  // };

  // const mouseLeave = (element) => {
  //   element.style.transform = "none";
  //   element.style.boxShadow = "initial";
  // };

  return (
    <div
      className={Classes.teacherCard}
      // onMouseEnter={(event) => mouseEnter(event, event.currentTarget)}
      // onMouseLeave={(event) => mouseLeave(event.currentTarget)}
      // onMouseMove={(event) => mouseMove(event, event.currentTarget)}
    >
      {console.log(averageRate)}
      <div className={Classes.teacherCardHeader}>
        <div className={Classes.teacherCardLSection}>
          {image ? (
            <img
              src={`${image}`}
              alt={first_name}
              className={Classes.teacherCardImage}
            />
          ) : (
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAM1BMVEXh4eGjo6OgoKDk5OTW1tbGxsadnZ21tbXJycm5ubnZ2dmmpqapqamxsbHMzMzc3Ny/v78ZOypQAAACeElEQVRoge2a25KDIBBEkQHkKvz/1y7mHqOiwJDUFv2QPJ5qwIFpIKSrq6urq6vrVwXw/G3GJIyr0blRcUZakUEHSykdouKfDboFGLy6Iu+iVHl0MEzDG/QCHiZkLgSxhM4SAZUL44fVm+ERkQthgxq5eH5BblIjV2Jx/TZ0lsehbk4s7vTq1UX8lNAY1J31dLOLsqpgHzoLA8sSYxxHmdWnAk+McRxlXt8uqDRWIWDH9NwifELg0liHgLVprP03bsmRJVWf+qUP6EvlgkDaLUpNTk0uRrWI8qmND2ef/9I2T/w+FulQ860j3N6qQlpPN20fzxGhZKtEYpTFN4Fca70wquKCq8d3MB3GNh0uU+bZVhvFmvXzhPHRRo0NQ4Qr+aaWzK6urq5jehSoZpUqQjyTwVlDRRQ11gXJPCobiJbKUrFMWAW1SmqUPSG6nNQ9Rl45XtCInnxl00CmuLmnuoK44U8VPYMOJsW8k02tMD0eJj6PTzvkocZx4yOjP2K5PMXnZ6FXMC+z6jKgF7DLNwzszKQuuEPuDMOUDb2A865LCqm5XF0GnZWRayd690N2M/p7VkyN3NOJ0YEc9wD2fK99INlMy56lElMDa85SD0SMaWWEkJBbF1+oOUGvLx5mk5NUQeknRPOqMshklLsnkZuPAS/givz0poBbQC3gFlET6ea2inPPtQcPSWiFBxGgz9YN6uoclcO5c3KowSRz4ThumLqKWeBarrputW6GDsCH9PXTwKv3uQCTFXt3BcJOKM01vDyUWiCvz6bw7iguia6J/fwjT6bCtMh3oyfNZJjfpM2v0oJkutmTuEdE0hPlrq6urq6u39Uf4HgXAqr221QAAAAASUVORK5CYII="
              alt={first_name}
              className={Classes.teacherCardImage}
            />
          )}
        </div>
        <div className={Classes.teacherCardDetails}>
          <div className={Classes.teacherCardName}>
            <span>
              <Link to={`/teacherprofile/${_id}`}>
                {first_name} {last_name}
              </Link>{" "}
            </span>
            <span>
              <MdOutlineVerifiedUser />
            </span>
          </div>
          <div className={Classes.teacherCardIcons}>
            <MdLocationPin />
            <span className={Classes.teacherCardIcon}>
              {country}, {city}
            </span>
          </div>
          <div className={Classes.teacherCardIcons}>
            <span className={Classes.teacherCardIcon}>
              <AiTwotoneMail />
            </span>
            <span>{contact_person_email}</span>
          </div>
          <div className={Classes.teacherCardCertifications}>
            <span className={Classes.teacherCardIcon}>
              <FaGraduationCap />
            </span>
            <span className={Classes.teacherCardCertification}>
              {education}
            </span>
          </div>
          <div className={Classes.teacherCardIcons}>
            Speaks:{" "}
            {languages.map((language, index) => (
              <span className={Classes.teacherCardIcon} key={index}>
                {language}
              </span>
            ))}
          </div>

          <p className={Classes.teacherCardDescription}>{description}</p>
        </div>
      </div>
      <div className={Classes.teacherCardRSection}>
        <div className={Classes.teacherCardReviews}>
          <div
            className={Classes.Stars}
            style={{ "--rating": averageRate }}
            aria-label="Rating of this product is 2.3 out of 5."
          ></div>
        </div>
        <div className={Classes.teacherCardButtons}>
          {/* <button
            className={Classes.teacherCardReviewButton}
            onClick={handleAddReviewClick}
          >
            Review
          </button> */}
          <ReviewModal reviewer={_id} />
          {/* <button
            className={Classes.teacherCardMessageButton}
            onClick={handleSendMessage}
          >
            Message
          </button> */}
          <MessageModal />
        </div>
      </div>
    </div>
  );
};

export default ShadowTeacherCard;
