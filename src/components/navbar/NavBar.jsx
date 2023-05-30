import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarnew.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className={`logo ${isOpen ? "open" : ""}`}>
        {/* <img src="logo.svg" alt="Logo Image" /> */}
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
        <li className={isOpen ? "fade" : ""}>
          <Link to="/job-news">JobNews</Link>
        </li>
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
        <li className={isOpen ? "fade" : ""} onClick={closeNavbar}>
          <div className="registerRes">
            <Link to="/register">Register</Link>
          </div>
        </li>
      </ul>
      <div className="register">
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
