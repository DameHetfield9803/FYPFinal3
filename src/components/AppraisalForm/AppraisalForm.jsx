import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/HR Navbar/HRNavBar";
import axios from "axios";

const AppraisalForm = () => {
  const [staffIds, setStaffIds] = useState([]);
  const [selectedStaffId, setSelectedStaffId] = useState("");
  const [managerFeedbackScore, setManagerFeedbackScore] = useState(null);

  useEffect(() => {
    // Fetch staff IDs from the server using Axios
    axios
      .get("http://localhost:3001/getstaffids")
      .then((response) => {
        setStaffIds(response.data.staffIds);
      })
      .catch((error) => {
        console.error("Error fetching staff IDs:", error);
      });
  }, []);

  // Inside your React component (AppraisalForm.jsx)
  useEffect(() => {
    // Assuming selectedStaffId is the currently selected staff_id
    axios
      .get(`http://localhost:3001/managerfeedback/score/${selectedStaffId}`)
      .then((response) => {
        const feedbackScore = response.data.managerFeedbackScore;
        setManagerFeedbackScore(feedbackScore);
      })
      .catch((error) => {
        console.error("Error fetching manager feedback score:", error);
      });
  }, [selectedStaffId]); // Trigger the effect when selectedStaffId changes

  // return jsx
  return (
    <>
      <Navbar />
      <h1>Performance Appraisal Form</h1>
      {/* Dropdown for Staff ID */}
      <label>Select Staff ID:</label>
      <select
        value={selectedStaffId}
        onChange={(e) => setSelectedStaffId(parseInt(e.target.value))}
      >
        <option value={0}>Select Staff ID</option>
        {staffIds.map((staffId) => (
          <option key={staffId} value={staffId}>
            {staffId}
          </option>
        ))}
      </select>

      {/* Display Manager Feedback Score */}
      {managerFeedbackScore !== null && (
        <p>Manager Feedback Score: {managerFeedbackScore}</p>
      )}
    </>
  );
};

export default AppraisalForm;
