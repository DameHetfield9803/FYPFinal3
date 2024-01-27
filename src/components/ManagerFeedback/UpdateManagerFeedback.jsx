// // Create a new component for updating feedback (UpdateFeedback.jsx)
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const UpdateFeedback = ({ match }) => {
//   const feedbackId = match.params.id;
//   const [feedback, setFeedback] = useState({});
//   const [updatedFeedbackText, setUpdatedFeedbackText] = useState("");

//   useEffect(() => {
//     // Fetch feedback data by ID
//     axios.get(`http://localhost:3001/managerfeedback/${feedbackId}`).then((response) => {
//       setFeedback(response.data);
//       setUpdatedFeedbackText(response.data.feedback_text);
//     });
//   }, [feedbackId]);

//   const handleUpdate = () => {
//     // Handle update logic, send a PUT request to update feedback
//     axios.put(`http://localhost:3001/managerfeedback/${feedbackId}`, {
//       feedback_text: updatedFeedbackText,
//       // Include other updated fields if needed
//     }).then(() => {
//       console.log("Feedback updated successfully!");
//       // Redirect to feedback list after update
//       history.push("/feedbacklist");
//     }).catch((error) => {
//       console.error("Error updating feedback:", error);
//     });
//   };

//   const history = useHistory();

//   return (
//     <div>
//       <h2>Update Feedback</h2>
//       <div>
//         <p>Staff ID: {feedback.staff_id}</p>
//         <p>Date: {feedback.date}</p>
//         <label htmlFor="updatedFeedbackText">Updated Comments:</label>
//         <textarea
//           id="updatedFeedbackText"
//           value={updatedFeedbackText}
//           onChange={(e) => setUpdatedFeedbackText(e.target.value)}
//         />
//         <button onClick={handleUpdate}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default UpdateFeedback;
