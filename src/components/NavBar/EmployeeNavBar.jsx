import React, { useState } from "react";
import "./EmployeeNavBar.css";

export default function Navbar() {
  const [showAttendanceDropdown, setShowAttendanceDropdown] = useState(false);
  const [showAccoladesDropdown, setShowAccoladesDropdown] = useState(false);
  const [showSelfEvalDropdown, setShowSelfEvalDropdown] = useState(false);
  const [showPeerEvalDropdown, setShowPeerEvalDropdown] = useState(false);

  const toggleAttendanceDropdown = () => {
    setShowAttendanceDropdown(!showAttendanceDropdown);
  };

  const toggleAccoladesDropdown = () => {
    setShowAccoladesDropdown(!showAccoladesDropdown);
  };

  const toggleSelfEvalDropdown = () => {
    setShowSelfEvalDropdown(!showSelfEvalDropdown);
  };

  const togglePeerEvalDropdown = () => {
    setShowPeerEvalDropdown(!showPeerEvalDropdown);
  };

  return (
    <div>
      {/* Navbar Items */}
      <div className="topnav">
        {/* Logo */}
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>

        {/* Navigation Links */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleAttendanceDropdown}>
            Attendance &#9660;
          </button>
          {showAttendanceDropdown && (
            <div className="dropdown-content">
              {/* Your custom links for Attendance dropdown */}
              <a href="/Attendance">View Attendance</a>
              <a href="/Attendancesummary">Attendance Summary</a>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={toggleAccoladesDropdown}>
            Accolades &#9660;
          </button>
          {showAccoladesDropdown && (
            <div className="dropdown-content">
              {/* Your custom links for Accolades dropdown */}
              <a href="/ViewAccolades">View Accolades</a>
              <a href="/AddAccolades">Add Accolades</a>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={toggleSelfEvalDropdown}>
            Self Evaluation &#9660;
          </button>
          {showSelfEvalDropdown && (
            <div className="dropdown-content">
              {/* Your custom links for Self Evaluation dropdown */}
              <a href="SelfEvaluation">Do Self Evaluation</a>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={togglePeerEvalDropdown}>
            Peer Evaluation &#9660;
          </button>
          {showPeerEvalDropdown && (
            <div className="dropdown-content">
              {/* Your custom links for Peer Evaluation dropdown */}
              <a href="/PeerEvaluation">Do Peer Evaluation</a>
            </div>
          )}  
        </div>
        {/* End of Dropdown Menus */}
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
