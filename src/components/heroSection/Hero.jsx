import React from "react";
import Classes from "./hero.module.css";
// import heroImage from "../../assets/heroImage.png";
import heroImage from "../../assets/heroImage2.png";
import heroImage2 from "../../assets/shape.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={Classes.hero}>
      <div className={Classes.heroWrapper}>
        <div>
          <div className={Classes.titleContainer}>
            <img
              src={heroImage}
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
        <img
          src={heroImage2}
          alt="heroImage"
          height={"600px"}
          width={"250px"}
        />
      </div>
      <div className={Classes.heroImagesWrapper}>
        <div className={Classes.image1}>
          <img src={image1} alt="" height={"500px"} width={"330px"} />
        </div>
        <div className={Classes.image3}>
          <img src={image3} alt="" height={"500px"} width={"450px"} />
        </div>
        <div className={Classes.image2}>
          <img src={image2} alt="" height={"500px"} width={"330px"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
