import React from "react";
import Classes from "./infoCard.module.css";
import Review from "./Review"
import { MdOutlineWorkOutline } from "react-icons/md";

const InfoCard = () => {
  return (
    <div>
      <div className={Classes.card}>
        <p>
          <MdOutlineWorkOutline />
          &nbsp;&nbsp;&nbsp;Work Experience
        </p>
        <a href="#">
          + Add work experience, including contracts and internships
        </a>
      </div>
      <div className={Classes.card}>
        <p>
          <MdOutlineWorkOutline />
          &nbsp;&nbsp;&nbsp;Workshop
        </p>
        <ul>
          <li>
            <p className={Classes.tags}>
              5 th IEEE Conference on Wireless Communication and Sensor Networks
              <br />
              <span>
                IIIT-Allahabad | <span>2010</span>
              </span>
            </p>
            <a className={Classes.edit} href="#">
              <i
                className={`${Classes.fas} ${Classes.faPen} ${Classes.strokeTransparentBlue}`}
              ></i>
            </a>
          </li>
          <li>
            <p className={Classes.tags}>
              Microsoft Theory Day
              <br />
              <span>
                IISc Bangalore | <span>2012</span>
              </span>
            </p>
            <a className={Classes.edit} href="#">
              <i
                className={`${Classes.fas} ${Classes.faPen} ${Classes.strokeTransparentBlue}`}
              ></i>
            </a>
          </li>
          <li>
            <p className={Classes.tags}>
              Microsoft Research India 2012 Summer School on Distributed
              Algorithms, Systems and Programming
              <br />
              <span>
                IISc Bangalore | <span>2012</span>
              </span>
            </p>
            <a className={Classes.edit} href="#">
              <i
                className={`${Classes.fas} ${Classes.faPen} ${Classes.strokeTransparentBlue}`}
              ></i>
            </a>
          </li>
          <li>
            <p className={Classes.tags}>
              IEEE workshop on Cyber security
              <br />
              <span>
                DAIICT Gandhi Nagar | <span>Nov, 2013</span>
              </span>
            </p>
            <a className={Classes.edit} href="#">
              <i
                className={`${Classes.fas} ${Classes.faPen} ${Classes.strokeTransparentBlue}`}
              ></i>
            </a>
          </li>
          <li>
            <p className={Classes.tags}>
              Author workshop jointly organized by Central Library
              <br />
              <span>
                MNNIT Allahabad & Springer (India) Pvt. Ltd New Delhi |{" "}
                <span>29th October, 2015</span>
              </span>
            </p>
            <a className={Classes.edit} href="#">
              <i
                className={`${Classes.fas} ${Classes.faPen} ${Classes.strokeTransparentBlue}`}
              ></i>
            </a>
          </li>
          <li>
            <p className={Classes.tags}>
              Workshop for Computer Science Teachers
              <br />
              <span>
                IIT Kanpur | <span>July, 2014</span>
              </span>
            </p>
            <a className={Classes.edit} href="#">
              <i
                className={`${Classes.fas} ${Classes.faPen} ${Classes.strokeTransparentBlue}`}
              ></i>
            </a>
          </li>
        </ul>
        <a href="#">+ Add workshops attended</a>
      </div>
      <div className={Classes.reviewsResSmallScreens}><Review /></div>
    </div>
  );
};

export default InfoCard;
