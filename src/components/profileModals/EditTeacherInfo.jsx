import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdModeEdit } from "react-icons/md";
import Classes from "../profile/infoCard.module.css";
import countries from "../../utils/countries";
import arabicCities from "../../utils/cities";

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

export default function EditTeacherInfo(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   props.updateTeacherProfileData(data);
  //   handleClose();
  //   reset();
  // };
  const onSubmit = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("first_name", data.first_name);
    // formData.append("last_name", data.last_name);
    // formData.append("country", data.country);
    // formData.append("city", data.city);
    // formData.append("contact_person_email", data.contact_person_email);
    // formData.append("contact_person_phone", data.contact_person_phone);
    // formData.append("image", data.image[0]); // Get the first file from the image field
    const newInfo = {
      first_name: data.first_name,
      last_name: data.last_name,
      //image: data.image[0],
      city: data.city,
      country: data.country,
      contact_person_phone: data.contact_person_phone,
      contact_person_email: data.contact_person_email,
    };
    console.log("formData", newInfo);
    props.updateTeacherProfileData(newInfo);
    handleClose();
    reset();
  };

  // const countries = [
  //   { code: "us", name: "United States" },
  //   { code: "ca", name: "Canada" },
  //   { code: "uk", name: "United Kingdom" },
  //   { code: "fr", name: "France" },
  //   { code: "de", name: "Germany" },
  //   { code: "jp", name: "Japan" },
  //   // Add more countries as needed
  // ];

  return (
    <div>
      <Button onClick={handleOpen} className={Classes.editIntro}>
        <MdModeEdit /> edit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your info
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} id="multistepsform">
            <div className="fs-input">
              <input
                type="text"
                name="first_name"
                {...register("first_name", { required: true })}
              />
              <label className="fs-label" htmlFor="fname">
                First Name
              </label>
            </div>
            <div className="fs-input">
              <input
                type="text"
                name="last_name"
                {...register("last_name", { required: true })}
              />
              <label className="fs-label" htmlFor="lname">
                Last Name
              </label>
            </div>
            <div className="fs-input">
              {/* <textarea name="address"></textarea> */}
              <select
                name="country"
                style={{ width: "310px" }}
                {...register("country")}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <label className="fs-label" htmlFor="address">
                Country
              </label>
            </div>

            <div className="fs-input">
              {/* <textarea name="address"></textarea> */}
              <select
                name="city"
                style={{ width: "310px" }}
                {...register("city")}
              >
                <option value="">Select Country</option>
                {arabicCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <label className="fs-label" htmlFor="address">
                City
              </label>
            </div>

            <div className="fs-input">
              {/* <input
                  type="email"
                  name=" contact_person_email"
                  {...register(" contact_person_email", { required: true })}
                /> */}
              <input
                type="email"
                name="contact_person_email"
                {...register("contact_person_email", {
                  required: "Contact person email is required",
                })}
              />
              <label className="fs-label" htmlFor="email">
                Contact Email
              </label>
            </div>

            <div className="fs-input">
              <input
                type="text"
                name="contact_person_phone"
                {...register("contact_person_phone", { required: true })}
              />
              <label className="fs-label" htmlFor="phone">
                Phone number (optional)
              </label>
            </div>
            {/* <div className="fs-input"> */}
            {/* <input type="text" name="lang" />  */}
            {/* <input
                  type="file"
                  accept="image/*"
                  id="img-upload"
                  name="image"
                  required
                  {...register("image")}
                /> */}
            {/* <input
                type="file"
                accept="image/*"
                id="img-upload"
                required
                {...register("image")}
              />
              <label className="fs-label" htmlFor="lang">
                Upload profile picture
              </label>
            </div> */}
            {/* </div> */}

            <input
              type="submit"
              name="submit"
              className="submit action-button"
              value="Edit"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
