import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import Cookie from 'universal-cookie';
import CookieService from "../services/cookie.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();
  console.log("user", user);

  const signUp = async (data) => {
    console.log("user", data);
    try {
      const response = await axios.post(
        "https://edushadows-backend.onrender.com/user/signup",
        {
          ...data,
        }
      );
      if (response.status === 201) {
        console.log(response);
        const newUser = response.data.user;
        setUser(newUser);
        toast.success("Signed up successfully");
        navigate("/login");
      } else {
        toast.error("Sign-up failed");
        throw new Error("Sign-up failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Sign-up failed");
    }
  };

  const login = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://edushadows-backend.onrender.com/user/login",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response);
        const authenticatedUser = response.data;

        // const token = response.headers["set-cookie"];
        // console.log("coookieeeeee", token);
        // const tok = response.headers; // Access the "Authorization" header
        // console.log("tok", tok);user: user, token: token
        setUser(authenticatedUser.user);
        toast.success("logged in successfully");
        localStorage.setItem(
          "userData",
          JSON.stringify(authenticatedUser.user)
        );
        CookieService.set("token", authenticatedUser.token);
        response.data.user.role === "Teacher"
          ?  navigate(`/teacherprofile/${response.data.user._id}`)
          : navigate("/profile"); // Navigate to the profile page
      } else {
        toast.error("login failed");
        throw new Error("Login failed");
      }
    } catch (error) {
      toast.error("login failed");
      console.error(error.message);
    }
  };

  const logout = async () => {
    try {
      // Perform logout logic, e.g., clear user session or revoke token

      // Example: Clear user session by making an API call to a logout endpoint
      await axios.post("https://edushadows-backend.onrender.com/logout");
      setUser(null);
      localStorage.removeItem("userData");
      CookieService.remove("token");
    } catch (error) {
      console.error(error);
    }
  };

  const authContextValue = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <div>
        {children}
        <ToastContainer />
      </div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
