// Import the React library and specific functions (useState, useEffect) from it.
import React, { useState, useEffect } from "react";

// Import the axios library, which is used for making HTTP requests.
import axios from "axios";

// Import the ManagerNavBar component from the "../NavBar/ManagerNavBar" file.
import ManagerNavBar from "../NavBar/ManagerNavBar";


// Object to store form data for manager feedback.
const ManagerFeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [feedbackData, setFeedbackData] = useState({
    manager_feedback_id: "",
    feedback_text: "",
    staff_id: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    op5: "",
    op6: "",
    op7: "",
    op8: "",
    op9: "",
    op10: "",
    op11: "",
    op12: "",
    date: "",
  });

  // useEffect hook to fetch manager feedback data when the component mounts.
  useEffect(() => {
    fetchFeedbackList();
  }, []);

    // Function to fetch manager feedback data from the server.
  const fetchFeedbackList = async () => {
    try {
      // Make a GET request to the specified URL.
      const response = await axios.get("http://localhost:3001/managerfeedback");
      setFeedbackList(response.data);
      // Set loading to false as data has been successfully loaded.
      setLoading(false);
    } catch (error) {
      // Handle errors that may occur during the data fetching process.
      console.error("Error fetching manager feedback:", error);
      setError(
        "Error fetching manager feedback. Please check your server and try again."
      );
      // Set loading to false even if an error occurs.
      setLoading(false);
    }
  };
// Function to handle the deletion of manager feedback.
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this manager feedback?"
    );
      // If the user cancels the deletion, return from the function.
    if (!confirmDelete) {
      return;
    }

    try {
       // Make a DELETE request to the specified URL.
      await axios.delete(`http://localhost:3001/managerfeedback/${id}`);
      // Set a success message for the popup.
      setPopupMessage("Manager feedback deleted successfully");
       // Show the popup.
      setShowPopup(true);
       // Fetch the updated feedback list.
      fetchFeedbackList();
    } catch (error) {
      // Handle errors that may occur during the deletion process.
      console.error("Error deleting manager feedback:", error);
    }
  };
// Function to handle editing manager feedback.
  const handleEdit = (feedback) => {
    // Set the selectedFeedback state with the feedback data to be edited.
    setSelectedFeedback(feedback);
     // Set the feedbackData state with the selected feedback data.
    setFeedbackData({
      manager_feedback_id: feedback.manager_feedback_id,
      feedback_text: feedback.feedback_text,
      staff_id: feedback.staff_id,
      op1: feedback.op1,
      op2: feedback.op2,
      op3: feedback.op3,
      op4: feedback.op4,
      op5: feedback.op5,
      op6: feedback.op6,
      op7: feedback.op7,
      op8: feedback.op8,
      op9: feedback.op9,
      op10: feedback.op10,
      op11: feedback.op11,
      op12: feedback.op12,
      date: feedback.date,
    });
  };
  // Function to handle changes in the form input fields.

  const handleChange = (e) => {
    // Destructure the name and value from the event target.
    const { name, value } = e.target;
    // Update the feedbackData state with the new values.
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
// Function to handle the submission of the feedback form.
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault();
    try {
      // Log the form data to the console (for debugging purposes).
      console.log("Submitting form...", feedbackData);
       // Make a PUT request to update the manager feedback with the given ID.
      await axios.put(
        `http://localhost:3001/managerfeedback/${selectedFeedback.manager_feedback_id}`,
        feedbackData
      );
       // Log a success message to the console.
      console.log("Manager feedback updated successfully");
      // Set a success message for the popup.
      setPopupMessage("Manager feedback updated successfully");
      // Show the popup.
      setShowPopup(true);
       // Fetch the updated feedback list.
      fetchFeedbackList();
      // Reset the selectedFeedback state to null.
      setSelectedFeedback(null);
      // Reset feedbackData state to initial values
      setFeedbackData({
        manager_feedback_id: "",
        feedback_text: "",
        staff_id: "",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        op5: "",
        op6: "",
        op7: "",
        op8: "",
        op9: "",
        op10: "",
        op11: "",
        op12: "",
        date: "",
      });
    } catch (error) {
      // Handle errors that may occur during the update process.
      console.error("Error updating manager feedback:", error);
    }
  };
// Return the JSX structure of the component.
  return (
    <div>
      {/* Render ManagerNavBar component */}
      <ManagerNavBar />

      <div>
        <h1>Manager Feedback List</h1>
        <br></br>
        {/* Table to display feedback data */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Options</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map((feedback) => (
              <tr key={feedback.manager_feedback_id}>
                <td>{feedback.staff_id}</td>
                <td>{feedback.date}</td>
                <td>{feedback.feedback_text}</td>
                <td>
                  <ul>
                    <li>
                      <strong>Op1:</strong> {feedback.op1}
                    </li>
                    <li>
                      <strong>Op2:</strong> {feedback.op2}
                    </li>
                    <li>
                      <strong>Op3:</strong> {feedback.op3}
                    </li>
                    <li>
                      <strong>Op4:</strong> {feedback.op4}
                    </li>
                    <li>
                      <strong>Op5:</strong> {feedback.op5}
                    </li>
                    <li>
                      <strong>Op6:</strong> {feedback.op6}
                    </li>
                    <li>
                      <strong>Op7:</strong> {feedback.op7}
                    </li>
                    <li>
                      <strong>Op8:</strong> {feedback.op8}
                    </li>
                    <li>
                      <strong>Op9:</strong> {feedback.op9}
                    </li>
                    <li>
                      <strong>Op10:</strong> {feedback.op10}
                    </li>
                    <li>
                      <strong>Op11:</strong> {feedback.op11}
                    </li>
                    <li>
                      <strong>Op12:</strong> {feedback.op12}
                    </li>
                  </ul>
                </td>
                <td>
                  <button onClick={() => handleEdit(feedback)}>Edit</button>
                  <button
                    onClick={() => handleDelete(feedback.manager_feedback_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="peer-feedback-popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Manager feedback edit form */}
      {selectedFeedback && (
        <div>
          <h3>Edit Manager Feedback</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Feedback Text:
              <input
                type="text"
                name="feedback_text"
                value={feedbackData.feedback_text}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Staff ID:
              <input
                type="text"
                name="staff_id"
                value={feedbackData.staff_id}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
             Insert Date:
              <input
                type="date"
                name="date"
                value={feedbackData.date}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            {/* Option inputs */}
            <label>
              Op1(Willingness to share and impact knowledge to subordinates/colleagues):
              <input
                type="text"
                name="op1"
                value={feedbackData.op1}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op2(Quality of Work):
              <input
                type="text"
                name="op2"
                value={feedbackData.op2}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op3(Ability to meet deadline):
              <input
                type="text"
                name="op3"
                value={feedbackData.op3}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op4(Communication):
              <input
                type="text"
                name="op4"
                value={feedbackData.op4}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op5(Reliablity/Responsibility/Commitment):
              <input
                type="text"
                name="op5"
                value={feedbackData.op5}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op6(Analytical Ability/Problem Solving):
              <input
                type="text"
                name="op6"
                value={feedbackData.op6}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op7(Initiative):
              <input
                type="text"
                name="op7"
                value={feedbackData.op7}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op8(Decision-Making):
              <input
                type="text"
                name="op8"
                value={feedbackData.op8}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op9(Reaction under Pressure):
              <input
                type="text"
                name="op9"
                value={feedbackData.op9}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op10(Adaptability & Flexibility):
              <input
                type="text"
                name="op10"
                value={feedbackData.op10}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op11(Innovation):
              <input
                type="text"
                name="op11"
                value={feedbackData.op11}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op12(Drive & Determination):
              <input
                type="text"
                name="op12"
                value={feedbackData.op12}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Update Manager Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
};

// Export the ManagerFeedbackList component.
export default ManagerFeedbackList;

