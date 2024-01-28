import React, { useState, useEffect } from "react";
import axios from "axios";

const AppraisalForm = () => {
  const [staffIds, setStaffIds] = useState([]);
  const [selectedStaffId, setSelectedStaffId] = useState(null);

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

  return (
    <>
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
    </>
  );
};

export default AppraisalForm;
