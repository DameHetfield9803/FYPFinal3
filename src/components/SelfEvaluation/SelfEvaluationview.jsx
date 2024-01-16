import React, { useState, useEffect } from "react";
import axios from 'axios';

function MyComponent() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Update the endpoint URL based on your server setup
    axios.get('http://localhost:3001/selffeedback')
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching self-feedback data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Self-Feedback Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Feedback ID</th>
            <th>Feedback Text</th>
            <th>Date</th>
            <th>Staff ID</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.self_feedback_id}>
              <td>{feedback.self_feedback_id}</td>
              <td>{feedback.feedback_text}</td>
              <td>{feedback.date}</td>
              <td>{feedback.staff_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
