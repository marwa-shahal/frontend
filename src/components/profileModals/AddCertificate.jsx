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

export default function AddCertificate(props) {
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
    const newCertificate = {
      name: data.name,
      issuingAuthority: data.issuingAuthority,
      issueDate: data.issueDate,
    };
    const updatedData = {
        certificates: [newCertificate],
    };
    console.log(updatedData);
    props.updateTeacherProfileData(updatedData);
    handleClose();
    reset();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        + Add workshops attended and certificates attained
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
                name="name"
                {...register("name", { required: true })}
              />
              <label className="fs-label" htmlFor="name">
                Name
              </label>
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="fs-input">
              <input
                type="text"
                name="issuingAuthority"
                {...register("issuingAuthority", { required: true })}
              />
              <label className="fs-label" htmlFor="issuingAuthority">
                Issuing Authority
              </label>
              {errors.issuingAuthority && <span>This field is required</span>}
            </div>
            <div className="fs-input">
              <input
                type="date"
                name="issueDate"
                {...register("issueDate", { required: true })}
              />
              <label className="fs-label" htmlFor="issueDate">
                Issue Date
              </label>
              {errors.issueDate && <span>This field is required</span>}
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
