import React from "react";
import "./NavBar.css";


export default function Navbar() {

  return (
    <div>
      {/* Navbar Items */}
      <div className="topnav">
        {/* Logo */}
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>

        {/* Navigation Links */}
        <a href="/Attendance">Attendance</a>
        <a href="/Accolades">Accolades</a>
        <a href="/AppraisalForm">Appraisal Form</a>

        {/* My Profile link*/}
        <a href="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
          <span>My Profile</span>
        </a>
      </div>
      {/* End of Navbar Items */}

    </div>
  )

}