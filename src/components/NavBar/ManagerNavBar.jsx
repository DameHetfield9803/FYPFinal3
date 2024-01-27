import React from "react";
import "./ManagerNavBar.css";

export default function ManagerNavbar() {
  return (
    <div>
      {/* Navbar Items */}
      <div className="topnav">
        {/* Logo */}
        <a href="/Home/1" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>

        {/* Navigation Links */}
        <a href="/Attendance">Attendance</a>
        <a href="/managerfeedback">Manager Feedback</a>
        <a href="/feedbacklist">Feedback list</a>
        <a href="/employee">Your Employees</a>
        <a href="/AppraisalForm">Appraisal Form</a>

        {/* My Profile link*/}
        <a href="/Profile" className="profile">
          <img
            src="Assets/Profile-icon.jpg"
            alt="Profile Icon"
            width="30px"
            height="30px"
          />
          <span>My Profile</span>
        </a>
      </div>
      {/* End of Navbar Items */}
    </div>
  );
}
