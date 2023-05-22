import React, { useState } from "react";
import Classes from "./shadowTeacherCard.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationPin, MdOutlineVerifiedUser } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";

const ShadowTeacherCard = ({
  image,
  name,
  email,
  country,
  profession,
  languages,
  certifications,
  description,
  reviews,
  price,
}) => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleAddReviewClick = () => {
    setShowReviewModal(true);
  };

  const handleCloseModal = () => {
    setShowReviewModal(false);
  };

  const handleSendMessage = () => {
    // Implement the functionality to send a message to the teacher
    // This could be done through a modal, a form, or an external messaging service
    // You can use a state or a function to handle the message sending logic
  };

  return (
    <div className={Classes.teacherCard}>
      <div className={Classes.teacherCardHeader}>
        <div className={Classes.teacherCardLSection}>
          <img src={image} alt={name} className={Classes.teacherCardImage} />
        </div>
        <div className={Classes.teacherCardDetails}>
          <div className={Classes.teacherCardName}>
            <span>{name}</span>
            <span>
              <MdOutlineVerifiedUser />
            </span>
          </div>
          <div className={Classes.teacherCardIcons}>
            <MdLocationPin />
            <span className={Classes.teacherCardIcon}>{country}</span>
          </div>
          <div className={Classes.teacherCardIcons}>
            <span className={Classes.teacherCardIcon}>
              <AiTwotoneMail />
            </span>
            <span>{email}</span>
          </div>
          <div className={Classes.teacherCardCertifications}>
            <span className={Classes.teacherCardIcon}>
              <FaGraduationCap />
            </span>

            {certifications.map((certification, index) => (
              <span className={Classes.teacherCardCertification} key={index}>
                {certification}
              </span>
            ))}
            <span className={Classes.teacherCardIcon}>{profession}</span>
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
            Style="--rating: 3.5;"
            aria-label="Rating of this product is 2.3 out of 5."
          ></div>
        </div>
        <div className={Classes.teacherCardButtons}>
          <button
            className={Classes.teacherCardReviewButton}
            onClick={handleAddReviewClick}
          >
            ADD Review
          </button>
          <button
            className={Classes.teacherCardMessageButton}
            onClick={handleSendMessage}
          >
            Message
          </button>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="review-modal">
          <div className="review-modal-content">
            <span className="review-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            {/* Review Form */}
            <form>
              <h3>Add Review</h3>
              {/* Include the necessary form fields for the review */}
              {/* For example: */}
              <label htmlFor="rating">Rating:</label>
              <input type="number" name="rating" min="1" max="5" required />

              <label htmlFor="reviewText">Review:</label>
              <textarea name="reviewText" rows="4" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShadowTeacherCard;
