import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();
  console.log("user",user)
  const signUp = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/signup",
        {...data, isValid:false, role:"User"}
      );

      if (response.status === 201) {
        console.log(response)
        const newUser = response.data.user;
        setUser(newUser);
      } else {
        throw new Error("Sign-up failed");
      }
    } catch (error) {
      let errorMessage = "Sign-up failed";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      // Handle sign-up error, e.g., display an error message to the user
      console.error(errorMessage);
    }
  };

  const login = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        data
      );
      console.log(response);
      if (response.status === 200) {
        const authenticatedUser = response.data;
        console.log(response.data);
        setUser(authenticatedUser.user);
        navigate("/profile"); // Navigate to the profile page
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      let errorMessage = "Login failed";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      // Handle login error, e.g., display an error message to the user
      console.error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      // Perform logout logic, e.g., clear user session or revoke token

      // Example: Clear user session by making an API call to a logout endpoint
      await axios.post("/api/logout");
      setUser(null);
    } catch (error) {
      let errorMessage = "Logout failed";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      // Handle logout error, e.g., display an error message to the user
      console.error(errorMessage);
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
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
