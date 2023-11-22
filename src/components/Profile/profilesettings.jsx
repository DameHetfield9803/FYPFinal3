import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profilesettings.css';

const ProfileSettings = () => {
  // Sample data for the profile
  const [profileData, setProfileData] = useState({
    employeeName: 'John Doe',
    employeeId: '123456',
    employeeEmail: 'john.doe@example.com',
  });

  // State for editable fields
  const [editableFields, setEditableFields] = useState({
    employeeName: false,
    employeeId: false,
    employeeEmail: false,
  });

  // Function to toggle edit mode for a field
  const toggleEditMode = (field) => {
    setEditableFields((prevEditableFields) => ({
      ...prevEditableFields,
      [field]: !prevEditableFields[field],
    }));
  };

  // Function to handle changes in input fields
  const handleInputChange = (field, value) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [field]: value,
    }));
  };

  return (
    <div>
      {/* Navbar */}
      <div className="topnav">
        <a href="http://localhost:3000/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>
        
        <Link to="/Profile" className="active">
          
        </Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Attendance">Attendance</Link>
        <Link to="/Accolades">Accolades</Link>
        <Link to="/AppraisalForm">AppraisalForm</Link>

        <Link to="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
          <span>My Profile</span>
        </Link>

        {/* Add more links as needed */}
      </div>

      {/* Profile container */}
      <div className="profile-container">
        <h2>Employee Profile</h2>
        <div className="profile-info">
          <div className="profile-field">
            <span className="field-label">Employee Name:</span>
            {editableFields.employeeName ? (
              <input
                type="text"
                value={profileData.employeeName}
                onChange={(e) => handleInputChange('employeeName', e.target.value)}
              />
            ) : (
              <span>{profileData.employeeName}</span>
            )}
            <button onClick={() => toggleEditMode('employeeName')}>Edit</button>
          </div>

          <div className="profile-field">
            <span className="field-label">Employee ID:</span>
            {editableFields.employeeId ? (
              <input
                type="text"
                value={profileData.employeeId}
                onChange={(e) => handleInputChange('employeeId', e.target.value)}
              />
            ) : (
              <span>{profileData.employeeId}</span>
            )}
            <button onClick={() => toggleEditMode('employeeId')}>Edit</button>
          </div>

          <div className="profile-field">
            <span className="field-label">Employee Email:</span>
            {editableFields.employeeEmail ? (
              <input
                type="text"
                value={profileData.employeeEmail}
                onChange={(e) => handleInputChange('employeeEmail', e.target.value)}
              />
            ) : (
              <span>{profileData.employeeEmail}</span>
            )}
            <button onClick={() => toggleEditMode('employeeEmail')}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
