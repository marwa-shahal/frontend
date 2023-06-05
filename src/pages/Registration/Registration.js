import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import arabicCities from "../../utils/cities";
import countries from "../../utils/countries";

const Registration = () => {
  const { signUp } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  console.log("a", arabicCities);
  const onSubmit = (data) => {
    let userData;
    console.log(data);
    if (userRegistration === "teacher") {
      userData = {
        ...data,
        // description:data.description,
        languages: result,
        isValid: false,
        role: "Teacher",
      };
    }
    if (userRegistration === "user") {
      userData = { ...data, isValid: false, role: "User" };
    }
    try {
      console.log("signup", userData);
      signUp(userData);
      // reset();
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  // const { signUp } = useContext(AuthContext);
  // const { register, handleSubmit, reset } = useForm();

  // const onSubmit = async (data) => {
  //   let userData;
  //   console.log(data);
  //   if (userRegistration === "teacher") {
  //     userData = {
  //       ...data,
  //       // description:data.description,
  //       languages: result,
  //       isValid: false,
  //       role: "Teacher",
  //     };
  //   }
  //   if (userRegistration === "user") {
  //     userData = { ...data, isValid: false, role: "User" };
  //   }
  //   try {
  //     console.log("signup", userData);
  //     await signUp(userData);
  //     reset();
  //   } catch (error) {
  //     console.error("Signup failed:", error.message);
  //   }
  // };
  // const countries = [
  //   { code: "us", name: "United States" },
  //   { code: "ca", name: "Canada" },
  //   { code: "uk", name: "United Kingdom" },
  //   { code: "fr", name: "France" },
  //   { code: "de", name: "Germany" },
  //   { code: "jp", name: "Japan" },
  //   // Add more countries as needed
  // ];

  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState([]);

  const updateStatus = () => {
    if (result.length === 0) {
      return "Select Options";
    } else {
      return result.join(", ");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (document.querySelector(".dropdown")) {
      const dropdown = document.querySelector(".dropdown");
      if (!dropdown.contains(e.target)) {
        setIsOpen(false);
      }
    }
  };

  const handleCheckAllChange = (e) => {
    const checked = e.target.checked;
    const checkedText = e.target.nextElementSibling.textContent;
    let newResult = [];

    if (checked) {
      newResult.push(checkedText);
      setResult(newResult);
    } else {
      setResult(newResult);
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    const checkedText = e.target.nextElementSibling.textContent;

    if (checked) {
      setResult([...result, checkedText]);
    } else {
      setResult(result.filter((item) => item !== checkedText));
    }
  };

  // steps for registering
  const [userRegistration, setUserRegistration] = useState("teacher");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  // };

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
            <div className="form">
              <div className="fs-input">
                <input
                  type="text"
                  name="email"
                  {...register("email", { required: true })}
                />
                <label className="fs-label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="fs-input">
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                />
                <label className="fs-label" htmlFor="password">
                  Password
                </label>
              </div>
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
              <div className="address">
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
              </div>
              <div className="address">
                <div className="fs-input">
                  {/* <textarea name="address"></textarea> */}
                  <select name="country" {...register("country")}>
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
                  <select name="city" {...register("city")}>
                    <option value="">Select City</option>
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
            <h3 className="fs-subtitle">Your Education</h3>
            <div className="fs-input">
              <input
                type="text"
                name="education"
                {...register("education", { required: true })}
              />
              <label className="fs-label" htmlFor="eduaction">
                Education Status
              </label>
            </div>
            <div className="fs-input">
              <input
                type="text"
                name="description"
                {...register("description", { required: true })}
              />
              <label className="fs-label" htmlFor="description">
                Short Description
              </label>
            </div>
            <div className="fs-input">
              {/* <input type="text" name="lang" /> */}
              <label className="fs-label" htmlFor="languages">
                Languages spoken
              </label>
              <div className={`dropdown ${isOpen ? "open" : ""}`}>
                <label className="dropdown-label" onClick={handleDropdownClick}>
                  {updateStatus()}
                </label>

                <div className="dropdown-list">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="dropdown-group-all"
                      className="check-all checkbox-custom"
                      id="checkbox-main"
                      onChange={handleCheckAllChange}
                    />
                    <label
                      htmlFor="checkbox-main"
                      className="checkbox-custom-label"
                    >
                      Selection All
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="dropdown-group"
                      className="check checkbox-custom"
                      id="checkbox-custom_01"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="checkbox-custom_01"
                      className="checkbox-custom-label"
                    >
                      Arabic
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="dropdown-group"
                      className="check checkbox-custom"
                      id="checkbox-custom_02"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="checkbox-custom_02"
                      className="checkbox-custom-label"
                    >
                      English
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="dropdown-group"
                      className="check checkbox-custom"
                      id="checkbox-custom_03"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="checkbox-custom_03"
                      className="checkbox-custom-label"
                    >
                      French
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={previousStep}
            />
            {/* <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={nextStep}
            /> */}
            <input
              type="submit"
              name="submit"
              className="submit action-button"
              value="Signup"
            />
          </fieldset>
        );
      // case 4:
      //   return (
      //     <fieldset>
      //       <input
      //         type="button"
      //         name="previous"
      //         className="previous action-button"
      //         value="Previous"
      //         onClick={previousStep}
      //       />
      //       <input
      //         type="submit"
      //         name="submit"
      //         className="submit action-button"
      //         value="Signup"
      //       />
      //     </fieldset>
      //   );
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
      <div className="RegisterForm">
        <div className="RegisterAs">
          <div
            className={
              userRegistration === "teacher"
                ? "RegisterActive"
                : "RegisterTeacher"
            }
            onClick={() => setUserRegistration("teacher")}
          >
            Register as a teacher
          </div>
          <div
            className={
              userRegistration === "user" ? "RegisterActive" : "RegisterUser"
            }
            onClick={() => setUserRegistration("user")}
          >
            Register as a user
          </div>
        </div>
        {userRegistration === "teacher" ? (
          <>
            <form id="multistepsform" onSubmit={handleSubmit(onSubmit)}>
              <ul id="progressbar">
                <li className={step === 1 ? "active" : ""}>Account Setup</li>
                <li className={step === 2 ? "active" : ""}>Personal Details</li>
                <li className={step === 3 ? "active" : ""}>Education</li>
                {/* <li className={step === 4 ? "active" : ""}>Experience</li> */}
              </ul>
              {renderStep()}
              <p>
                Already have an account? <Link to="/login"> Login</Link>{" "}
              </p>
            </form>
          </>
        ) : (
          <div id="multistepsform">
            <form onSubmit={handleSubmit(onSubmit)} className="RegisterWrapper">
              <h2 className="fs-title">Welcome back,</h2>
              <h3 className="fs-subtitle">
                Get your first job as shadow teacher
              </h3>
              <h3 className="fs-subtitle"></h3>
              <div>
                {/* Existing form fields */}
                <div className="firstlastNameWrapper">
                  <div className="fs-input">
                    <input
                      type="text"
                      name="first_name"
                      {...register("first_name", { required: true })}
                    />
                    <label className="fs-label" htmlFor="first_name">
                      First Name
                    </label>
                  </div>
                  <div className="fs-input">
                    <input
                      type="text"
                      name="last_name"
                      {...register("last_name", { required: true })}
                    />
                    <label className="fs-label" htmlFor="last_name">
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="fs-input">
                  <input
                    type="text"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  <label className="fs-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="fs-input">
                  <input
                    type="password"
                    name="pass"
                    {...register("password", { required: true })}
                  />
                  <label className="fs-label" htmlFor="pass">
                    Password
                  </label>
                </div>
                {/* <div className="fs-input">
                  <input type="password" name="cpass" />
                  <label className="fs-label" htmlFor="cpass">
                    Confirm Password
                  </label>
                </div> */}
                <input
                  type="submit"
                  name="next"
                  className="next action-button"
                  value="Signup"
                />
              </div>
              <p>
                Already have an account? <Link to="/login"> Login</Link>{" "}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
