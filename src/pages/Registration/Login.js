import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  // const { userData, handleSubmit } = useForm();
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  
  // const Login = (data) => {
  //   // Perform login logic, collect user data, etc.
  //   // Call the login function from the context
  //   login(data);
  // };

  const onSubmit = async (data) => {
    try {
      console.log("logind",data);
      // Call the login function from the context and pass the form data
      await login(data);
      // register.reset();
    } catch (error) {
      // Handle login error, e.g., display an error message to the user
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="RegisterContainer">
      <div className="RegisterImage">
        <img
          className="RegisterImage1"
          src="https://static.panthi.lk/addImages/are-you-looking-for-a-shadow-teacher-sen-teacher-1660148686.jpg"
          alt="RegisterImage1"
        />
        <img
          className="RegisterImage2"
          src="https://itspaks.com/wp-content/uploads/2023/01/JIP0003600-768x512.jpg"
          alt="RegisterImage2"
        />
      </div>
      <div id="multistepsform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="fs-title">Welcome back,</h2>
          <h3 className="fs-subtitle">login to continue</h3>
          <h3 className="fs-subtitle"></h3>
          <div className="RegisterWrapper">
            <div className="fs-input">
              {/* <input type="text" name="email" ref={userData} /> */}
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
              <label className="fs-label" htmlFor="pass">
                Password
              </label>
            </div>
            <input
              type="submit"
              name="next"
              className="next action-button"
              value="Login"
            />
          </div>
          <p>
            Don't have an account? <Link to="/userData">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
