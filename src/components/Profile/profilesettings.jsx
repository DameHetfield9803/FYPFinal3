// Import the necessary modules.
import React, { useState } from "react";
import "./profilesettings.css";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

// Define the functional component ProfileSettings.
const ProfileSettings = () => {
  // Default profile information (cannot be changed).
  const defaultProfileInfo = {
    name: "User",
    department: "BMX",
    batchNumber: "1101",
  };

  const history = useHistory();

  const logout = async () => {
    try {
      await signOut(auth);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Default personal information (can be edited).
  const defaultPersonalInfo = {
    phone: "8888 8888",
    email: "usertsh@tsh.com",
  };

  // State variables for editable fields.
  const [phone, setPhone] = useState(defaultPersonalInfo.phone);
  const [email, setEmail] = useState(defaultPersonalInfo.email);

  // State variable to track whether the fields are in edit mode.
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle the submission of edited personal information.
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Perform the necessary logic to save the edited personal information.
    console.log("Edited Phone:", phone);
    console.log("Edited Email:", email);
  };

  // JSX rendering the component.
  return (
    <div>
      {/* Navbar Items */}
      <Navbar></Navbar>
      {/* End of Navbar Items */}

      {/* Profile Settings Section */}
      <div className="profile-settings-container">
        <h1>Profile Settings</h1>

        {/* Display default profile information. */}
        <div>
          <p>
            <strong>Name:</strong> {defaultProfileInfo.name}
          </p>
          <p>
            <strong>Department:</strong> {defaultProfileInfo.department}
          </p>
          <p>
            <strong>Batch Number:</strong> {defaultProfileInfo.batchNumber}
          </p>
        </div>

        {/* Display editable personal information with edit buttons. */}
        <div className="mb-3">
          {/* Personal Phone Number */}
          <p>
            <strong>Personal Phone Number:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <span>{phone}</span>
            )}
            <button
              className="btn btn-link"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </p>

          {/* Personal Email */}
          <p>
            <strong>Personal Email:</strong>{" "}
            {isEditing ? (
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span>{email}</span>
            )}
            <button
              className="btn btn-link"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </p>

        </div>

        {/* Form for saving changes. */}
        {isEditing && (
          <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        )}
        <button onClick={logout}>LOGOUT</button>
      </div>
      {/* End of Profile Settings Section */}

    </div>
  );
};

// Export the ProfileSettings component as the default export.
export default ProfileSettings;
