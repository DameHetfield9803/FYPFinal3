// Import the React library, which helps in building user interfaces in JavaScript.
import React from "react";

// Import the Link component from the "react-router-dom" library, which helps in creating navigation links in a React application.
import { Link } from "react-router-dom";

// Import the NavBar component from the "../NavBar/NavBar" file, which is a custom component for displaying a navigation bar.
import ManagerNavBar from "../NavBar/ManagerNavBar";

// Define a React functional component named ManagerFeedbackSuccess.
export default function ManagerFeedbackSuccess() {
  // Return the following JSX (a syntax extension for JavaScript recommended for React applications).

  // Render a <div> (division) element to structure the content.
  return (
    <div>
      {/* Include the NavBar component to display the navigation bar. */}
      <ManagerNavBar />

      {/* Render a heading element (<h1>) with a success message. */}
      <h1>Your Feedback Of An Employee Has Been Successfully Sent.</h1>

      {/* Create a line break for better spacing. */}
      <br></br>

      {/* Render a <div> element with inline styles to center the content. */}
      <div style={{ textAlign: "center" }}>

        {/* Create a Link component pointing to the "/home" route, wrapped around a button element. */}
        <Link to="/home/2">
          <button style={{ marginRight: "10px" }}>Go to Home</button>
        </Link>

        {/* Create a Link component pointing to the "/managerfeedback" route, wrapped around a button element. */}
        <Link to="/managerfeedback">
          <button style={{ marginRight: "10px" }}>
            Add Another Manager Feedback
          </button>
        </Link>

        {/* Create a Link component pointing to the "/feedbacklist" route, wrapped around a button element. */}
        <Link to="/feedbacklist">
          <button>View Feedback List</button>
        </Link>
      </div>
    </div>
  );
}
