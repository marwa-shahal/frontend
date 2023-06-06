import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CookieService from "../../services/cookie.service";
import ProfileAvatar from "./ProfileAvatar.js";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./navbarnew.css";
import trace from "../../assets/trace.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const existToken = CookieService.get("token");
  console.log(existToken);
  const currentUser = JSON.parse(localStorage.getItem("userData"));
  const { setUser } = useContext(AuthContext);
  console.log("token", currentUser);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    CookieService.remove("token");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className={`logo ${isOpen ? "open" : ""}`}>
        <img src={trace} alt="Logo Image" />
        <Link to="/" className="brandLink">
          EduShadows
        </Link>
      </div>
      <div
        div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={toggleNavbar}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
          <Link to="/">Home</Link>
        </li>
        <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
          <Link to="/find-teachers">Find Shadow Teachers</Link>
        </li>
        {/* <li className={isOpen ? "fade" : ""}>
          <Link to="/job-news">JobNews</Link>
        </li> */}
        {/* <li className={isOpen ? "fade" : ""}>
          <Link to="/events-webinars">Events&Webinars</Link>
        </li> */}
        <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        {/* <li>
          <button className="login-button" href="#">
            Login
          </button>
        </li> */}

        {!currentUser || !existToken ? (
          <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
            <div className="registerRes">
              <Link to="/register">Register</Link>
            </div>
          </li>
        ) : (
          <>
            <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
              <Link
                to={
                  currentUser.role === "Teacher"
                    ? `/teacherprofile/${currentUser._id}`
                    : `/profile/${currentUser._id}`
                }
                className="registerRes"
              >
                Profile
              </Link>
            </li>
            <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
              <Link to="/login" className="registerRes" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
      {!currentUser || !existToken ? (
        <div className="register">
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div className="register">
          {/* <Avatar sx={{ bgcolor: "#ec663e" }} variant="square">
              N
            </Avatar> */}
          {/* <Avatar sx={{ bgcolor: "black" }} variant="square"></Avatar> */}
          <ProfileAvatar handleLogout={handleLogout} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
