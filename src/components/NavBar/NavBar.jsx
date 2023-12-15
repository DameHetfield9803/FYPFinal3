// Import the necessary modules.
import React from "react";

const Navbar = () => {
  return (
    <div className="topnav">
      {/* Logo */}
      <a href="/Home" className="logo-link">
        <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
      </a>

      {/* Navigation Links */}
      <a href="/Dashboard">Dashboard</a>
      <a href="/Attendance">Attendance</a>
      <a href="/Accolades">Accolades</a>
      <a href="/AppraisalForm">AppraisalForm</a>

      {/* My Profile link*/}
      <a href="/Profile" className="profile">
        <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
        <span>My Profile</span>
      </a>
    </div>
  );
};

export default Navbar;
