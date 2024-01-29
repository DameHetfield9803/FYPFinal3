import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HRNavBar.css";

export default function HRNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="topnav">
        <Link to="/Home/1" className="logo-link">
          <img src="/Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </Link>

        {/* Employee Dropdown */}
        <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
          <button className="dropbtn" onClick={toggleDropdown}>
            Employee
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content-vertical">
              <Link to="/hrhome/:id/viewemployee">View Employees</Link>
              <Link to="/hrhome/:id/createemployee">Create Employees</Link>
              <Link to="/hrhome/:id/updateemployee">Update Employees</Link>
              <Link to="/hrhome/:id/deleteemployee">Delete Employees</Link>
            </div>
          )}
        </div>

        {/* Other Dropdown Items */}
        <div className="dropdown">
          <button className="dropbtn">Supervisor feedback</button>
          <div className="dropdown-content-vertical">
            <Link to="/feedbackList">View Supervisor feedback</Link>
            {/* <Link to="/managerfeedback">Do Supervisor feedback</Link> */}
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Peer feedback</button>
          <div className="dropdown-content-vertical">
            <Link to="/peerevaluationlist">View Peer feedback</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Self feedback</button>
          <div className="dropdown-content-vertical">
            <Link to="/selfevaluationlist">View Self feedback</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Attendance</button>
          <div className="dropdown-content-vertical">
            <Link to="/Attendance">View Attendance</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Accolades</button>
          <div className="dropdown-content-vertical">
            <Link to="/viewAccolades">View Accolades</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Appraisal Form</button>
          <div className="dropdown-content-vertical">
            <Link to="/AppraisalForm">Appraisal Form</Link>
          </div>
        </div>

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
    </div>
  );
}
