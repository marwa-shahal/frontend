import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactUs/contactUs";
import Home from "./pages/Home/Home";
import FindTeachers from "./pages/FindTeachers/FindTeachers.js";
import JobNews from "./pages/JobNews/JobNews";
import EventsWebinars from "./pages/EventsWebinars/EventsWebinars";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Registration/Login";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/find-teachers" element={<FindTeachers />} />
        <Route path="/job-news" element={<JobNews />} />
        <Route path="/events-webinars" element={<EventsWebinars />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
