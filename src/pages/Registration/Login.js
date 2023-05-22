import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
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
      <div id="multistepsform">
        <form>
          <h2 className="fs-title">Welcome back,</h2>
          <h3 className="fs-subtitle">Get your first job as shadow teacher</h3>
          <h3 className="fs-subtitle"></h3>
          <div className="RegisterWrapper">
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
            <input
              type="submit"
              name="next"
              className="next action-button"
              value="Login"
            />
          </div>
          <p> Don't have an account? <Link to="/register"> Signup</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
