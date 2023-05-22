import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <fieldset>
            <h2 className="fs-title">Create your account</h2>
            <h3 className="fs-subtitle">
              Get your first job as shadow teacher
            </h3>
            <h3 className="fs-subtitle"></h3>
            <div className="fs-input">
              <input type="text" name="email" />
              <label className="fs-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="fs-input">
              <input type="password" name="pass" />
              <label className="fs-label" htmlFor="pass">
                Password
              </label>
            </div>
            <div className="fs-input">
              <input type="password" name="cpass" />
              <label className="fs-label" htmlFor="cpass">
                Confirm Password
              </label>
            </div>
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={nextStep}
            />
          </fieldset>
        );
      case 2:
        return (
          <fieldset>
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">We will never sell it</h3>
            <div className="form">
              <div className="fs-input">
                <input type="text" name="fname" />
                <label className="fs-label" htmlFor="fname">
                  First Name
                </label>
              </div>
              <div className="fs-input">
                <input type="text" name="lname" />
                <label className="fs-label" htmlFor="lname">
                  Last Name
                </label>
              </div>
              <div className="fs-input">
                <textarea name="address"></textarea>
                <label className="fs-label" htmlFor="address">
                  Address
                </label>
              </div>
              <div className="fs-input">
                <input type="text" name="phone" />
                <label className="fs-label" htmlFor="phone">
                  Phone number (optional)
                </label>
              </div>
            </div>
            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={previousStep}
            />
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={nextStep}
            />
          </fieldset>
        );
      case 3:
        return (
          <fieldset>
            <h2 className="fs-title">Education</h2>
            <h3 className="fs-subtitle">Your Eduaction</h3>
            <div className="fs-input">
              <input type="text" name="lang" />
              <label className="fs-label" htmlFor="lang">
                Languages spoken
              </label>
            </div>
            <div className="fs-input">
              <input type="text" name="facebook" />
              <label className="fs-label" htmlFor="lang">
                Certificates
              </label>
            </div>
            <div className="fs-input">
              <input type="text" name="gplus" />
              <label className="fs-label" htmlFor="lang">
                Short Description
              </label>
            </div>
            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={previousStep}
            />
            <input
              type="submit"
              name="submit"
              className="submit action-button"
              value="Submit"
            />
          </fieldset>
        );
      default:
        return null;
    }
  };

  return (
    <div className="RegisterContainer">
      <div className="RegisterImage">
        <img
          className="RegisterImage1"
          src="https://static.panthi.lk/addImages/are-you-looking-for-a-shadow-teacher-sen-teacher-1660148686.jpg"
        />
        <img
          className="RegisterImage2"
          src="https://itspaks.com/wp-content/uploads/2023/01/JIP0003600-768x512.jpg"
        />
      </div>
      <form id="multistepsform" onSubmit={handleSubmit}>
        <ul id="progressbar">
          <li className={step === 1 ? "active" : ""}>Account Setup</li>
          <li className={step === 2 ? "active" : ""}>Personal Details</li>
          <li className={step === 3 ? "active" : ""}>Social Profiles</li>
        </ul>

        {renderStep()}
        <p> Already have an account? <Link to="/login"> Login</Link> </p>
      </form>
    </div>
  );
};

export default Registration;
