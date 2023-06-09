import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";

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

export default function AddExp(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newExperience = [
      {
        position: data.position,
        description: data.description,
        company: data.company,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    ];
    const updatedData = {
      experience: newExperience,
    };
    props.updateTeacherProfileData(updatedData);
    handleClose();
    reset();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        + Add work experience, including contracts and internships
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add your experience
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} id="multistepsform">
            <div className="fs-input">
              <input
                type="text"
                name="position"
                {...register("position", { required: true })}
              />
              <label className="fs-label" htmlFor="position">
                Position
              </label>
              {errors.position && <span>This field is required</span>}
            </div>
            <div className="fs-input">
              <input
                type="text"
                name="description"
                {...register("description", { required: true })}
              />
              <label className="fs-label" htmlFor="description">
                Description
              </label>
              {errors.description && <span>This field is required</span>}
            </div>
            <div className="fs-input">
              <input
                type="text"
                name="company"
                {...register("company", { required: true })}
              />
              <label className="fs-label" htmlFor="company">
                Company
              </label>
              {errors.company && <span>This field is required</span>}
            </div>
            <div className="fs-input">
              <input type="date" name="startDate" {...register("startDate")} />
              <label className="fs-label" htmlFor="startDate">
                Start Date
              </label>
            </div>
            <div className="fs-input">
              <input type="date" name="endDate" {...register("endDate")} />
              <label className="fs-label" htmlFor="endDate">
                End Date
              </label>
            </div>
            <input
              type="submit"
              name="submit"
              className="submit action-button"
              value="Add"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
