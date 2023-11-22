import React, { useState } from 'react';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './profilesettings.css';

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

        {/* My Profile link */}
        <a href="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
          <span>My Profile</span>
        </a>
      </div>

      {/* Welcome message */}
      <h1>Welcome Employee, This is your homepage</h1>
    </div>
  );
};

const ProfileSet = () => {
  // State variables to store user information
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');

  // Event handlers for updating user information
  const handleNameChange = (event) => setName(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  return (
    <div>
      {/* Include Navigation component */}
      <Navigation />

      {/* Centered container with border */}
      <div className="container">
        <div className="profile-container">
          <h2>Profile Settings</h2>
          <form>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Phone Number:
              <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
          </form>

          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Phone Number:</strong> {phoneNumber}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSet;
