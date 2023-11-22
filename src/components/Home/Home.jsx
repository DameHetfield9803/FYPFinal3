import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Navigation = () => (
  <div className="topnav">
    <Link to="/Home" className="logo-link">
      <img src="Assets/TSH.jpg" alt="Company Logo" width="310px" height="90px" />
    </Link>
    <Link to="/Dashboard">Dashboard</Link>
    <Link to="/Attendance">Attendance</Link>
    <Link to="/Accolades">Accolades</Link>
    <Link to="/AppraisalForm">AppraisalForm</Link>

    {/* Profile icon and text as a link to "/Profile" */}
    <Link to="/Profile" className="profile">
      <img src="path/to/profile-icon.png" alt="Profile Icon" width="30px" height="30px" />
      <span>My Profile</span>
    </Link>
  </div>
);

const Home = () => {
  function getUser() {
    // Your logic to fetch user information
  }

  return (
    <div>
      <Navigation />
      <h1>Welcome Employee, This is your homepage</h1>
    </div>
  );
};

export default Home;
