import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../NavBar/NavBar";
import { Link, useHistory } from "react-router-dom";

const SelfEvalList = () => {
  const [selfEvalList, setSelfEvalList] = useState([]);
  const history = useHistory(); // Get access to the history object

  useEffect(() => {
    // Fetch self-evaluation data from the server
    axios.get("http://localhost:3001/selffeedback").then((response) => {
      setSelfEvalList(response.data);
    });
  }, []);

  const handleUpdate = (id) => {
    // Redirect to the update page for the selected self-evaluation ID
    history.push(`/updateselfevaluation/${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    axios.delete(`http://localhost:3001/selffeedback/${id}`).then(() => {
      console.log("Self-evaluation deleted successfully!");
      // Update local state after deletion
      setSelfEvalList((prevSelfEvalList) =>
        prevSelfEvalList.filter(
          (evaluation) => evaluation.self_evaluation_id !== id
        )
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Self-Evaluation List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selfEvalList.map((evaluation) => (
              <tr key={evaluation.self_evaluation_id}>
                <td>{evaluation.staff_id}</td>
                <td>{evaluation.date}</td>
                <td>{evaluation.feedback_text}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(evaluation.self_evaluation_id)}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(evaluation.self_evaluation_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/SelfEvaluation">Add New Self-Evaluation</Link>
      <br />
    </div>
  );
};

export default SelfEvalList;
