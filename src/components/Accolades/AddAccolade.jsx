import React, { useState } from "react";
import axios from "axios";
import "./AddAccolade.css";
import Navbar from '../NavBar/NavBar';

const AddAccolade = () => {
  const [accoladeData, setAccoladeData] = useState({
    accolade_title: "",
    completion_date: "",
    file: null,
    achievement_level: "", // Updated to be selected manually
    staff_id: "",
  });

  const [verificationMessage, setVerificationMessage] = useState("");
  const [confirmationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccoladeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form
    if (!validateForm()) {
      return;
    }
    // Confirm the action
    if (!window.confirm("Are you sure you want to add this accolade?")) {
      return;
    }
    // Perform form submission with accoladeData
    try {
      await axios.post("http://localhost:3001/addaccolade", accoladeData);
      // Reset form and display verification message
      setAccoladeData({
        accolade_title: "",
        completion_date: "",
        file: null,
        achievement_level: "",
        staff_id: "",
      });
      setVerificationMessage("Accolade added successfully!");
      // Clear verification message after 3 seconds
      setTimeout(() => {
        setVerificationMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error adding accolade:", error);
      // Handle error, show error message, etc.
    }
  };

  // Validate the form
  const validateForm = () => {
    if (
      !accoladeData.accolade_title ||
      !accoladeData.completion_date ||
      !accoladeData.achievement_level ||
      !accoladeData.staff_id
    ) {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  };

  return (
    <div>
      <Navbar />
      <h1>Add Accolade</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Accolade Title:
          <input
            type="text"
            name="accolade_title"
            value={accoladeData.accolade_title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Completion Date:
          <input
            type="date"
            name="completion_date"
            value={accoladeData.completion_date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Achievement Level:
          <select
            name="achievement_level"
            value={accoladeData.achievement_level}
            onChange={handleChange}
            required
          >
            <option value={0}>Select Achievement Level</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>

          </select>
        </label>
        <br />
        <label>
          Staff ID:
          <input
            type="text"
            name="staff_id"
            value={accoladeData.staff_id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Accolade</button>        
      </form>

      <p></p>

      <h2>Achievement Level Description</h2>
      <div className="description">
        <p>
          <strong>Level 1 (Entry-Level Certifications):</strong> Basic Skills , Introduction , Beginner Level , Essential Knowledge , Foundational Proficiency.
        </p>
        <p>
          <strong>Level 2: (Intermediate Certifications):</strong> Intermediate Skills , Practical Application , Competent Level , Working Knowledge , Applied Proficiency.
        </p>
        <p>
          <strong>Level 3: (Advanced Certifications):</strong> Advanced Skills , Specialized Knowledge , In-depth Understanding , Advanced Proficiency , Complex Concepts.
        </p>
        <p>
          <strong>Level 4: (Expert Certifications):</strong> Expert Level Skills , Mastery , High Proficiency , Comprehensive Knowledge , Authority in the Field.
        </p>
        <p>
          <strong>Level 5: (Specialist or Master Certifications):</strong> Master Level Skills , Top-tier Expertise , Leadership Mastery , Distinguished Proficiency , Elite Status.
        </p>
      </div>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      {verificationMessage && <p>{verificationMessage}</p>}
    </div>
  );
};

export default AddAccolade;
