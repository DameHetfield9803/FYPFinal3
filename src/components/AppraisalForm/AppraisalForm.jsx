import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/HR Navbar/HRNavBar";
import axios from "axios";

const AppraisalForm = () => {
  const [staffIds, setStaffIds] = useState([]);
  const [selectedStaffId, setSelectedStaffId] = useState(null);
  const [managerFeedbackTotalScore, setManagerFeedbackTotalScore] =
    useState(null);
  const [peerFeedbackTotalScore, setPeerFeedbackTotalScore] = useState(null);
  const [selfFeedbackTotalScore, setSelfFeedbackTotalScore] = useState(null);
  const [accoladesTotalScore, setAccoladesTotalScore] = useState(null);
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
    axios
      .get(`http://localhost:3001/managerfeedback/score/${selectedStaffId}`)
      .then((response) => {
        const totalScore = response.data.totalScore; // Updated property name
        setManagerFeedbackTotalScore(totalScore); // Updated state variable
      })
      .catch((error) => {
        console.error("Error fetching manager feedback score:", error);
      });
  }, [selectedStaffId]);

  // Peer Feedback score
  useEffect(() => {
    axios
      .get(`http://localhost:3001/peerfeedback/score/${selectedStaffId}`)
      .then((response) => {
        const totalScore = response.data.totalScore; // Updated property name
        setPeerFeedbackTotalScore(totalScore); // Updated state variable
      })
      .catch((error) => {
        console.error("Error fetching peer feedback score:", error);
      });
  }, [selectedStaffId]);

  // Self Feedback score
  useEffect(() => {
    axios
      .get(`http://localhost:3001/selffeedback/score/${selectedStaffId}`)
      .then((response) => {
        console.log("Self Feedback Response:", response.data);
        const totalScore = response.data.totalScore;
        setSelfFeedbackTotalScore(totalScore);
      })
      .catch((error) => {
        console.error("Error fetching self feedback score:", error);
      });
  }, [selectedStaffId]);

  // Accolade score
  // Accolade score
  useEffect(() => {
    axios
      .get(`http://localhost:3001/accolades/score/${selectedStaffId}`)
      .then((response) => {
        console.log("Accolade Response:", response.data);
        const totalScore = response.data.totalScore;
        setAccoladesTotalScore(totalScore);
      })
      .catch((error) => {
        console.error("Error fetching accolades score:", error);
      });
  }, [selectedStaffId]);
  // Attendance score
  useEffect(() => {
    axios
      .get(`http://localhost:3001/accolades/score/${selectedStaffId}`)
      .then((response) => {
        console.log("Accolade Response:", response.data);
        const totalScore = response.data.totalScore;
        setAccoladesTotalScore(totalScore);
      })
      .catch((error) => {
        console.error("Error fetching accolades score:", error);
      });
  }, [selectedStaffId]);

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
      {managerFeedbackTotalScore !== null && (
        <p>Manager Feedback Score: {managerFeedbackTotalScore}</p>
      )}
      {/* Display Peer Feedback Score */}
      {peerFeedbackTotalScore !== null && (
        <p>Peer Feedback Score: {peerFeedbackTotalScore}</p>
      )}
      {/* Display Self Feedback Score */}
      {selfFeedbackTotalScore !== null && (
        <p>Self Feedback Score: {selfFeedbackTotalScore}</p>
      )}
      {/* Display Accolades Score */}
      {accoladesTotalScore !== null && (
        <p>Accolades Feedback Score: {accoladesTotalScore}</p>
      )}
    </>
  );
};

export default AppraisalForm;
