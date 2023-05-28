import React from "react";
import ShadowTeacherCard from "../../components/shadowTeacherCard/ShadowTeacherCard";
import ShadowTeacherInfoCard from "../../components/shadowTeacherCard/ShadowTeacherInfoCard";
import Classes from "./findTeacher.module.css";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";

function FindTeachers() {
  const teacher = {
    image:
      "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
    name: "John Doe",
    email: "john.doe@gmail.com",
    country: "USA",
    profession: "Math Teacher",
    languages: ["English", "Spanish"],
    certifications: ["Certified Teacher"],
    description:
      "Experienced math teacher passionate about helping students excel.",
    reviews: 4.5,
  };
  const countries = [
    "Country 1",
    "Country 2",
    "Country 3",
    // Add more countries here
  ];
  return (
    <div>
      <div className={Classes.filterContainer}>
        <div className={Classes.filterItem}>
          <input
            type="text"
            className={Classes.searchBar}
            placeholder="Search by name"
          />
          <AiOutlineSearch className={Classes.searchIcon} />
        </div>
        <div className={`${Classes.filterItem} ${Classes.dropdown}`}>
          {/* <label htmlFor="country">Country</label> */}
          <select id="country" className={Classes.select}>
            {countries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className={`${Classes.filterItem} ${Classes.dropdown}`}>
          <div className={Classes.dropbtn}>Availability</div>
          <AiFillCaretDown className={Classes.downIcon} />
          <div className={Classes.dropdownContent}>
            <a href="#">Available Now</a>
            <a href="#">Full Time</a>
            <a href="#">Part Time</a>
          </div>
        </div>
      </div>
      <div className={Classes.findTeacherWrapper}>
        <div className={Classes.lSide}>
          <ShadowTeacherCard {...teacher} />
          <ShadowTeacherCard {...teacher} />
          <ShadowTeacherCard {...teacher} />
        </div>
        <div>
          <ShadowTeacherInfoCard />{" "}
        </div>
      </div>
    </div>
  );
}

export default FindTeachers;
