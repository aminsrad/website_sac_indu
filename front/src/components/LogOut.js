// LogoutButton.js
import React from "react";

const LogOut = ({ logout }) => {
  const handleLogout = () => {
    // localStorage.setItem("token", null);
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;
