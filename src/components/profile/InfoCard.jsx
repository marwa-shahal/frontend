import React from "react";
import Classes from "./infoCard.module.css";
import Review from "./Review";
import AddExp from "../profileModals/AddExp";
import AddCertificate from "../profileModals/AddCertificate";
import { MdOutlineWorkOutline } from "react-icons/md";

const InfoCard = (props) => {
  return (
    <div className={Classes.infoCards}>
      <div className={Classes.card}>
        <p>
          <MdOutlineWorkOutline />
          &nbsp;&nbsp;&nbsp;Work Experience
        </p>
        <ul>
          {props.profileData.experience
            ? props.profileData.experience.map((exp) => (
                <li key={exp.id}>
                  <p className={Classes.tags}>
                    {exp.position}
                    <br />
                    {exp.description}
                    <br />
                    <span>
                      {exp.company} |
                      <span>
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(exp.endDate).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </span>
                  </p>
                </li>
              ))
            : ""}
        </ul>
        {/* <a href="#">
          + Add work experience, including contracts and internships
        </a> */}
        <AddExp
          updateTeacherProfileData={props.updateTeacherProfileData}
          profileData={props.profileData}
        />
      </div>
      <div className={Classes.card}>
        <p>
          <MdOutlineWorkOutline />
          &nbsp;&nbsp;&nbsp;Certificates
        </p>
        <ul>
          {props.profileData.certificates
            ? props.profileData.certificates.map((certificate) => {
                <li>
                  <p className={Classes.tags}>{certificate.name}</p>
                </li>;
              })
            : ""}
        </ul>
        <AddCertificate
          updateTeacherProfileData={props.updateTeacherProfileData}
          profileData={props.profileData}
        />
      </div>
      <div className={Classes.reviewsResSmallScreens}>
        <Review reviews={props.reviews} />
      </div>
    </div>
  );
};

export default InfoCard;
