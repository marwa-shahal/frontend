import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdModeEdit } from "react-icons/md";
import Classes from "../profile/infoCard.module.css";

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

export default function EditImage(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [img, setImg] = useState({});
  const [imgFromBB, setImgFromBB] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    let image = e.target.files[0];
    setImg(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("image", img, img.name);
      let res = await axios.post(
        "https://api.imgbb.com/1/upload?key=6a4a2ae5e3aba66394edb996811d956d",
        fd
      );
      console.log(res.data.data.display_url);
      setImgFromBB(res.data.data.display_url);
      let editedImage = { image: res.data.data.display_url };
      props.updateTeacherProfileData(editedImage);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} className={Classes.editIntro}>
        <MdModeEdit /> edit image
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
          <form onSubmit={handleSubmit} id="multistepsform">
            {/* <input type="file" onChange={handleChange} /> */}
            <div className="fs-input">
              <input type="file" name="image" onChange={handleChange} />
              <label className="fs-label" htmlFor="endDate">
                Upload Your Image
              </label>
            </div>
            {/* <button className="submit action-button">upload</button> */}
            <input
              type="submit"
              name="submit"
              className="submit action-button"
              value="upload"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
