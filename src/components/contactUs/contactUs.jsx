import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Classes from "./contactUs.module.css";

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    
  };

  return (
    <div className={Classes.contactUs}>
      <div className={Classes.contactWrapper}>
        <section className={Classes.getInTouch}>
          <p className={Classes.contactTitle}>Contact Us</p>
          <p className={Classes.contactPar}>Don't hesitate, get in contact with us.</p>
          <form className={`${Classes["contact-form"]} ${Classes.row}`} onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-50"]}`}
            >
              <input
                id="name"
                className={`${Classes["input-text"]} ${Classes["js-input"]}`}
                type="text"
                {...register('name', { required: true })}
              />
              <label className={Classes.label} htmlFor="name">
                Name
              </label>
              {errors.name && <span className={Classes.error_message}>Name is required</span>}
            </div>
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-50"]}`}
            >
              <input
                id="email"
                className={`${Classes["input-text"]} ${Classes["js-input"]}`}
                type="email"
                {...register('email', { required: true })}
              />
              <label className={Classes.label} htmlFor="email">
                E-mail
              </label>
              {errors.email && <span className={Classes.error_message}>Invalid email address</span>}
            </div>
            <div
              className={`${Classes["form-field"]} ${Classes.col} ${Classes["x-100"]}`}
            >
              <input
                id="message"
                className={`${Classes["input-text"]} ${Classes["js-input"]}`}
                type="text"
                {...register('message', { required: true })}
              />
              <label className={Classes.label} htmlFor="message">
                Message
              </label>
              {errors.message && <span className={Classes.error_message}>Message is required</span>}
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

