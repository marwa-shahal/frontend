import * as React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Classes from "./modal.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ReviewModal(props) {
  let location = useLocation();
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const reviewData = {
        ...data,
        shadow_teacher_id: props.reviewer,
        reviewer_id: user._id,
      };
      console.log(reviewData);

      const response = await axios.post(
        "https://edushadows-backend.onrender.com/review/",
        reviewData
      );

      if (response.status === 200) {
        console.log(response);
        reset();
        handleClose();
      } else {
        throw new Error("Failed to add review");
      }
    } catch (error) {
      let errorMessage = "Failed to add review";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      console.error(errorMessage);
    }
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {location.pathname === "/teacherprofile" ? (
        <p className={Classes.teacherProfielCardReviewBtn} onClick={handleOpen}> +Add a review </p>
      ) : (
        <button
          className={Classes.teacherCardReviewButton}
          onClick={handleOpen}
          disabled = {user?.role==="Teacher"}
        >
          Review
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className={Classes.title}>Add Review</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Classes.rating}>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                required
                {...register("rating", { required: true })}
              />
              {/* {errors.rating && <span>This field is required.</span>} */}
            </div>
            <div className={Classes.review}>
              <label htmlFor="reviewText">Review:</label>
              <textarea
                name="reviewText"
                rows="4"
                {...register("reviewText", { required: true })}
              />
              {/* {errors.reviewText && <span>This field is required.</span>} */}
            </div>
            <button className={Classes.button} type="submit">
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
