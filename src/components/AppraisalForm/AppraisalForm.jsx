import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/HR Navbar/HRNavBar";
import axios from "axios";

const AppraisalForm = () => {
  const [staffIds, setStaffIds] = useState([]);
  const [selectedStaffId, setSelectedStaffId] = useState("");
  const [managerFeedbackScore, setManagerFeedbackScore] = useState(null);
  const [peerFeedbackScore, setPeerFeedbackScore] = useState(null);
  const [selfFeedbackScore, setSelfFeedbackScore] = useState(null);
  // const [accoladesScore, setAccoladesScore] = useState(null);
  // const [attendanceScore, setAttendanceScore] = useState(null);

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

  // Manager Feedback score
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

  // Peer Feedback score
  useEffect(() => {
    axios
      .get(`http://localhost:3001/peerfeedback/score/${selectedStaffId}`)
      .then((response) => {
        const feedbackScore = response.data.peerFeedbackScore;
        setPeerFeedbackScore(feedbackScore);
      })
      .catch((error) => {
        console.error("Error fetching peer feedback score:", error);
      });
  }, [selectedStaffId]); // Trigger the effect when selectedStaffId changes

  // Self Feedback score
  useEffect(() => {
    axios
      .get(`http://localhost:3001/selffeedback/score/${selectedStaffId}`)
      .then((response) => {
        const feedbackScore = response.data.selfFeedbackScore;
        setSelfFeedbackScore(feedbackScore);
      })
      .catch((error) => {
        console.error("Error fetching self feedback score:", error);
      });
  }, [selectedStaffId]); // Trigger the effect when selectedStaffId changes

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
      {/* Display Peer Feedback Score */}
      {peerFeedbackScore !== null && (
        <p>Peer Feedback Score: {peerFeedbackScore}</p>
      )}
      {/* Display Self Feedback Score */}
      {selfFeedbackScore !== null && (
        <p>Self Feedback Score: {selfFeedbackScore}</p>
      )}
    </>
  );
};

export default AppraisalForm;
