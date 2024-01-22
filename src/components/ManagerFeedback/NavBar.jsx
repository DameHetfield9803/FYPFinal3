import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* Navbar Items */}
      <div className="topnav">
        {/* Logo */}
        <Link to="/home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </Link>

        {/* Navigation Links */}
        <Link to="/attendance">Attendance</Link>
        <Link to="/accolades">Accolades</Link>
        <Link to="/appraisalForm">Appraisal Form</Link>

        {/* My Profile link*/}
        <Link to="/profile" className="profile">
          <img
            src="Assets/Profile-icon.jpg"
            alt="Profile Icon"
            width="30px"
            height="30px"
          />
          <span>My Profile</span>
        </Link>
      </div>
      {/* End of Navbar Items */}
    </div>
  );
}
