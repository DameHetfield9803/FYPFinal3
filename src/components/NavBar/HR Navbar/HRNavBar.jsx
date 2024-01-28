import { Link } from "react-router-dom";
import React from "react";
import "./HRNavBar.css";

export default function HRNavbar() {
  return (
    <div>
      {/* Navbar Items */}
      <div className="topnav">
        {/* Logo */}
        <Link to="/Home/1" className="logo-link">
          <img src="/Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </Link>

        {/* Navigation Links */}
        <Link to="/Attendance">Attendance</Link>
        <Link to="/viewAccolades">Accolades</Link>
        <Link to="/AppraisalForm">Appraisal Form</Link>

        {/* My Profile link*/}
        <Link to="/Profile" className="profile">
          <img
            src="/Assets/Profile-icon.jpg"
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
