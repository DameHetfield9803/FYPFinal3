import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Home.css';

const Navigation = () => {
  const history = useHistory();

  const logout = async () => {
    try {
      await signOut(auth);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="topnav">
        <a href="http://localhost:3000/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Company Logo" width="310px" height="90px" />
        </a>
        <a href="http://localhost:3000/Dashboard">Dashboard</a>
        <a href="http://localhost:3000/Attendance">Attendance</a>
        <a href="http://localhost:3000/Accolades">Accolades</a>
        <a href="http://localhost:3000/AppraisalForm">AppraisalForm</a>

        {/* Profile link */}
        <Link to="/Profile" className="profile">
          <img src="Assets/profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
          <span>My Profile</span>
        </Link>
      </div>

      {/* Welcome message */}
      <h1>Welcome Employee, This is your homepage</h1>
    </div>
  );
};

export default Navigation;
