// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./EmailAuto.css"; // Import styles for the EmailAuto component
import Navbar from "../NavBar/NavBar"; // Import Navbar component

// Define the EmailAuto functional component
export default function EmailAutomate() {
  // Define state variables using the useState hook
  const [name, setName] = useState(""); // State variable for storing the name input
  const [email, setEmail] = useState(""); // State variable for storing the email input
  const [loading, setLoading] = useState(false); // State variable to track loading state during form submission

  // useEffect hook is used for performing side effects in the component
  useEffect(() => {
    // Initialize the emailjs library with a user ID
    emailjs.init("3OO27FbyO9f3HW4S-"); 
  }, []); // The empty dependency array means this effect runs once when the component mounts

  // Define the function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Set up service and template IDs for sending the email
    const serviceId = "service_1gsafi3"; // Replace with your actual service ID
    const templateId = "template_nvf1lql"; // Replace with your actual template ID

    try {
      setLoading(true); // Set loading state to true during the email sending process

      // Use emailjs to send the email with the provided service and template IDs
      await emailjs.send(serviceId, templateId, {
        name, // Pass the name from the state
        recipient: email, // Pass the email from the state
      });

      // Show an alert if the email is successfully sent
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.error("Error sending email:", error); // Log an error if there's an issue with email sending
    } finally {
      setLoading(false); // Set loading state back to false after the email is sent or an error occurs

      // Reset form fields after submission
      setName(""); // Clear the name input
      setEmail(""); // Clear the email input
    }
  };

  // Return JSX for rendering the EmailAuto component
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <section className="email-auto-section">
        <aside className="email-auto-aside"></aside>
        {/* Render a form with input fields for name and email */}
        <form className="email-auto-form" onSubmit={handleSubmit}>
          <div className="email-auto-form-group">
            <label htmlFor="name">Name</label>
            {/* Input field for entering the name, controlled by the 'name' state */}
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update 'name' state on input change
            />
          </div>
          <div className="email-auto-form-group">
            <label htmlFor="email">Email</label>
            {/* Input field for entering the email, controlled by the 'email' state */}
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update 'email' state on input change
            />
          </div>
          {/* Submit button for the form, disabled during the loading state */}
          <button className="email-auto-btn" disabled={loading}>
            Send Email Alert
          </button>
        </form>
      </section>
    </div>
  );
}
