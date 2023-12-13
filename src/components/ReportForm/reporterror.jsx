import React, { useState } from "react";

// Define a functional component named ReportForm using React.
const ReportForm = () => {
  // Use the useState hook to create state variables for form data.
  const [formData, setFormData] = useState({
    name: "", // Initialize the name field as an empty string.
    email: "", // Initialize the email field as an empty string.
    description: "", // Initialize the description field as an empty string.
  });

  // Define a function to handle changes in the input fields.
  const handleChange = (e) => {
    // Extract the name and value from the event (e) object.
    const { name, value } = e.target;
    // Update the corresponding field in formData using the setFormData function.
    setFormData({
      ...formData, // Spread the existing formData to avoid losing other fields.
      [name]: value, // Update the specific field with the new value.
    });
  };

  // Define a function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    // Log the form data to the console (in a real application, you'd handle the data differently).
    console.log("Form submitted:", formData);
  };

  // Return the JSX for rendering the form.
  return (
    <div>
        {/* NAVBAR ITEMS */}
      <div className="topnav">
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>

        <a href="/Dashboard">Dashboard</a>
        <a href="/Attendance">Attendance</a>
        <a href="/Accolades">Accolades</a>
        <a href="/AppraisalForm">AppraisalForm</a>


        {/* My Profile link*/}
        <a href="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />

          <span>My Profile</span>
        </a>

      </div>
      {/*END OF NAVBAR ITEMS */}
      <h1>Report Form</h1>

      {/* Create a form element with an onSubmit event handler set to the handleSubmit function. */}
      <form onSubmit={handleSubmit}>
        {/* Input field for the user's name. */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          {/* Input element with type 'text', bound to the 'name' field in formData. */}
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange} // Set the onChange event handler to the handleChange function.
            required // Mark the field as required.
          />
        </div>

        {/* Input field for the user's email. */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          {/* Input element with type 'email', bound to the 'email' field in formData. */}
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange} // Set the onChange event handler to the handleChange function.
            required // Mark the field as required.
          />
        </div>

        {/* Textarea field for the report description. */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          {/* Textarea element bound to the 'description' field in formData. */}
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange} // Set the onChange event handler to the handleChange function.
            required // Mark the field as required.
          ></textarea>
        </div>

        {/* Submit button for the form. */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Export the ReportForm component as the default export.
export default ReportForm;
