import React, { useEffect, useRef } from "react";
import Classes from "./contactUs.module.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const form = useRef();
  const resetForm = () => {
    form.current.reset(); // Reset the form by calling the reset() method on the form's DOM element
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Thank you for contacting us, we'll get back to you shortly!"
          );
          resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  // const onSubmit = (data) => {
  //   // Handle form submission
  //   console.log(data);

  // };

  return (
    <div className={Classes.contactUs}>
      <div className={Classes.contactWrapper}>
        <ToastContainer />
        <section className={Classes.getInTouch}>
          <p className={Classes.contactTitle}>Contact Us</p>
          <p className={Classes.contactPar}>
            Don't hesitate, get in contact with us.
          </p>
          <form
            className={`${Classes["contact-form"]} ${Classes.row}`}
            ref={form}
            onSubmit={sendEmail}
          >
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-50"]}`}
            >
              <input
                id="name"
                className={`${Classes["input-text"]} ${Classes["js-input"]}`}
                type="text"
              />
              <label className={Classes.label} htmlFor="name">
                Name
              </label>
            </div>
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-50"]}`}
            >
              <input
                id="email"
                className={`${Classes["input-text"]} ${Classes["js-input"]}`}
                type="email"
              />
              <label className={Classes.label} htmlFor="email">
                E-mail
              </label>
            </div>
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-100"]}`}
            >
              <input
                id="message"
                className={`${Classes["input-text"]} ${Classes["js-input"]}`}
                type="text"
              />
              <label className={Classes.label} htmlFor="message">
                Message
              </label>
            </div>
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-100"]} ${Classes["align-center"]}`}
            >
              <input
                className={Classes["submit-btn"]}
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </section>
        <div></div>
      </div>
    </div>
  );
}

export default ContactUs;
