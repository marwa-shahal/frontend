import React from "react";
import Classes from "./hero.module.css";
// import heroImage from "../../assets/heroImage.png";
import heroImage from "../../assets/heroImage2.png";
import heroImage2 from "../../assets/shape.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import hero1 from "../../assets/hero1.svg";
import hero2 from "../../assets/hero2.svg";
import hero3 from "../../assets/hero3.svg";
import hero4 from "../../assets/hero4.svg";
import disabilities from "../../assets/disabilities.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={Classes.hero}>
      <div className={Classes.heroWrapper}>
        <div>
          <div className={Classes.titleContainer}>
            <img
              src={heroImage}
              className={Classes.heroImage1}
              alt="hero image"
              width={"300px"}
              height={"150px"}
            />
            <p className={Classes.title}>Growth</p>
          </div>
          <div className={Classes.titleContainer}>
            <p className={Classes.title}>Nurtured </p>
            <div className={Classes.callToAction}>
              <p> Embark on a seamless journey to connect</p>
              <p> your child with the ideal shadow teacher.</p>
              <Link to="/find-teachers" className={Classes.link}>
                Find Shadow Teachers
              </Link>
            </div>
            <div className={Classes.callToActionImage}>
              <img src={image1} alt="shadowteacher1" />
            </div>
          </div>
          <div className={Classes.titleContainer}>
            {/* <div className={Classes.heroSmallImage}>
              <img
                src="https://www.verywellfamily.com/thmb/bXLGuAbY-TghSRP6YDjkEB_cB0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/we-will-get-to-the-right-answer-eventually--187244393-5959672d3df78c4eb6403b38.jpg"
                alt="shadow teacher"
                width={"190px"}
                height={"90px"}
                className={Classes.image}
              />
            </div> */}

            <p className={Classes.title}> by Shadows</p>
          </div>
        </div>
        <img src={heroImage2} className={Classes.heroImage2} alt="heroImage" />
      </div>
      <div>
        <div className={Classes.heroWrapperResp}>
          <img src={hero4} alt="heroWrapper" />
        </div>
        <div className={Classes.callToActionRes}>
          <p> Embark on a seamless journey to connect</p>
          <p> your child with the ideal shadow teacher.</p>
          <Link to="/find-teachers" className={Classes.link}>
            Find Shadow Teachers
          </Link>
        </div>
      </div>
      <div className={Classes.heroImagesWrapper}>
        <div className={Classes.image1}>
          <img
            src={image1}
            alt="shadowteacher1"
            height={"330px"}
            width={"330px"}
          />
        </div>
        <div className={Classes.image4}>
          <img
            src={image4}
            alt="shadowteacher2"
            height={"330px"}
            width={"490px"}
          />
        </div>
        <div className={Classes.image3}>
          <img
            src={image3}
            alt="shadowteacher3"
            height={"330px"}
            width={"490px"}
          />
        </div>
        <div className={Classes.image2}>
          <img
            src={image2}
            alt="shadowteacher2"
            height={"330px"}
            width={"310px"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
