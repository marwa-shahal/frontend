import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";
import ShadowTeacherCard from "../../components/shadowTeacherCard/ShadowTeacherCard";
import ShadowTeacherInfoCard from "../../components/shadowTeacherCard/ShadowTeacherInfoCard";
import Classes from "./findTeacher.module.css";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";

function FindTeachers() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("");
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleNameChange = (event) => {
    // setFirstName(event.target.value);
    setQuery(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailabilityStatus(event.target.value);
  };

  const getData = () => {
    axios
      .get(
        `http://localhost:5000/user/filterteachers?query=${query}&country=${country}&page=${page}&limit=4`
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
  };

  useEffect(() => {
    // setLoading(true);
    getData();
  }, [query, country, page]);

  const countries = [
    { code: "", name: "Select country" },
    { code: "us", name: "us" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "jp", name: "Japan" },
    // Add more countries as needed
  ];
  const avalibilty = ["full time", "part time", "unavailable"];

  return (
    <div className={Classes.findTeachersPage}>
      <div className={Classes.filterContainer}>
        <div className={Classes.filterItem}>
          <input
            type="text"
            className={Classes.searchBar}
            placeholder="Search by name"
            onChange={handleNameChange}
          />
          <AiOutlineSearch className={Classes.searchIcon} />
        </div>
        <div className={`${Classes.filterItem} ${Classes.dropdown}`}>
          {/* <label htmlFor="country">Country</label> */}
          <select
            id="country"
            className={Classes.select}
            onChange={handleCountryChange}
          >
            {countries.map((country, index) => (
              <option value={country.name} key={index}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`${Classes.filterItem} ${Classes.dropdown}`}>
          {/* <label htmlFor="country">Country</label> */}
          <select
            id="country"
            className={Classes.select}
            onChange={handleAvailabilityChange}
          >
            {avalibilty.map((status, index) => (
              <option value={status} key={index}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={Classes.findTeacherWrapper}>
        <div className={Classes.lSide}>
          {console.log(data)}
          {data.teachers ? (
            <>
              {data.teachers.map((teacher) => {
                return (
                  <div key={teacher._id}>
                    <ShadowTeacherCard {...teacher} />{" "}
                  </div>
                );
              })}
              {/* <Pagination
                onChange={handlePageChange}
                pagination={data.pagination}
              /> */}
            </>
          ) : (
            "no teachers available"
          )}
        </div>
        {data.teachers ? (
          <Pagination
            onChange={handlePageChange}
            pagination={data.pagination}
          />
        ) : (
          ""
        )}
        {/* <div>
          <ShadowTeacherInfoCard />
        </div> */}
      </div>
    </div>
  );
}

export default FindTeachers;
