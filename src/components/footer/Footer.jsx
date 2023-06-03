import React from "react";
import Classes from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={Classes.footerContainer}>
      <footer className={Classes.footer}>
        <p> &copy; 2023 <span className={Classes.brandFooterLink } >EduShadows</span> All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
