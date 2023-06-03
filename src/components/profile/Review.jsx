import React from "react";
import Classes from "./infoCard.module.css";
// import CookieService from "../../services/cookie.service";
import ReviewModal from "../../components/modal/ReviewModal";
// import { MdOutlineReviews,MdReviews } from "react-icons/md";
const Review = (props) => {
  // const currentUser = CookieService.get("token");
  const currentUser = JSON.parse(localStorage.getItem("userData"));
  return (
    <div>
      <div className={Classes.about}>
        <p>
          {/* <MdReviews />  */}
          {/* <MdOutlineReviews /> */}
          Reviews
        </p>
        <ul className={Classes.reviewsList}>
          {props.reviews.map((review) => (
            <li className={Classes.review}>
              <div className={Classes.reviewerProfile}>
                {review.reviewer_id.image ? (
                  <img
                    src={review.reviewer_id.image}
                    width={"50px"}
                    height={"50px"}
                    alt="reviewer"
                  />
                ) : (
                  <img
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    width={"50px"}
                    height={"50px"}
                    alt="reviewer"
                  />
                )}
                <h4>{review.reviewer_id.first_name} </h4>
              </div>
              <p className={Classes.tags}>
                {review.reviewText}
                <br />

                <span
                  className={Classes.Stars}
                  style={{ "--rating": review.rating }}
                  aria-label="Rating of this product is 2.3 out of 5."
                >
                  |{" "}
                  <span>
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </span>
              </p>
            </li>
          ))}
        </ul>
        {/* <a href="#">+ Add review</a> */}
        {currentUser.role !== "Teacher" ? <ReviewModal /> : ""}
      </div>
    </div>
  );
};

export default Review;
