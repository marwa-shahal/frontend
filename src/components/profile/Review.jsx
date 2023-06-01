import React from "react";
import Classes from "./infoCard.module.css";
import ReviewModal from "../../components/modal/ReviewModal"
import { MdOutlineReviews,MdReviews } from "react-icons/md";
const Review = () => {
  
  return (
    <div>
      <div className={Classes.about}>
        <p>
          {/* <MdReviews />  */}
          {/* <MdOutlineReviews /> */}
         Reviews
        </p>
        <ul  className={Classes.reviewsList}>
          <li className={Classes.review}>
            <div className={Classes.reviewerProfile}>
            <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" width={"50px"} height={"50px"} alt="reviewer" />
            <h4 > Marwa</h4></div>
            <p className={Classes.tags}>
              5 th IEEE Conference on Wireless Communication and Sensor Networks
              <br />
              <span>
                IIIT-Allahabad | <span>2010</span>
              </span>
            </p>
          </li>
        </ul>
        {/* <a href="#">+ Add review</a> */}
        <ReviewModal />
      </div>
    </div>
  );
};

export default Review;
