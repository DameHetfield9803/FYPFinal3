import React, { useState, useEffect } from "react";
import EmployeeNavBar from "../NavBar/EmployeeNavBar";
import axios from "axios";
import "./SelfEvaluation.css";
import { useHistory } from "react-router-dom";
// import moment from "moment";

export default function SelfEvaluation() {
  //hooks
  const [staffId, setStaffId] = useState("");
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [op3, setOp3] = useState(0);
  const [op4, setOp4] = useState(0);
  const [op5, setOp5] = useState(0);
  const [op6, setOp6] = useState(0);
  const [feedback_text, setFeedbackText] = useState("");

  //validation state
  const [formErrors, setFormErrors] = useState({});
  const [showOptionsError, setShowOptionsError] = useState(false);
  const [validStaffIds, setValidStaffIds] = useState([]);

  // check if staffid is in database, do a get
  useEffect(() => {
    axios.get("http://localhost:3001/selffeedback").then((response) => {
      const feedbackData = response.data;
      // Extract staff IDs from feedbackData and set them in your state
      const ids = feedbackData.map((feedback) => feedback.staff_id);
      setValidStaffIds(ids);
    });
  }, []);

  const history = useHistory();

  // Helper Functions
  const validateForm = () => {
    const errors = {};

    // Validate staffId
    if (!staffId || isNaN(staffId) || parseInt(staffId) <= 0) {
      errors.staffId = "Staff ID is required and must be a positive integer";
    } else if (!validStaffIds.includes(parseInt(staffId))) {
      errors.staffId = "Staff ID not found in the database";
    }

    // Validate options
    const options = [op1, op2, op3, op4, op5, op6];
    if (options.some((option) => option === 0)) {
      errors.options = "Please select a value for all options";
      setShowOptionsError(true);
    } else {
      setShowOptionsError(false);
    }

    // Validate feedback_text
    if (!feedback_text.trim()) {
      errors.feedback_text = "Feedback is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // calculate total score
  const calTotalScore = () => {
    return op1 + op2 + op3 + op4 + op5 + op6;
  };

  // posting to the database
  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const totalScore = calTotalScore();
      axios
        .post("http://localhost:3001/createselffeedback/", {
          feedback_text: feedback_text,
          staff_id: staffId,
          op1: op1,
          op2: op2,
          op3: op3,
          op4: op4,
          op5: op5,
          op6: op6,
          score: totalScore,
        })

        .then(() => {
          history.push("/selfevaluationsuccess");
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  return (
    <div className="App">
      <EmployeeNavBar></EmployeeNavBar>
      <div className="container">
        <h1 className="mt-3">Self Evaluation</h1>
        <b>
          {" "}
          <p className="mt-3">
            (1:Strongly_Disagree , 2:Disagree , 3:Neutral , 4:Agree ,
            5:Strongly_Agree)
          </p>
          {/* Include staff_id and submission_date here */}
          <label htmlFor="staffId">Staff ID:</label>
          <input
            placeholder="Ex: 1"
            type="number"
            id="staffId"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            required
          />
          {formErrors.staffId && <p className="error">{formErrors.staffId}</p>}
          <br></br>
        </b>
        {/* End here */}

        <table className="table table-striped mt-3">
          <tbody>
            <tr>
              <td className="td-se-question">
                Do you understood what you did today.
              </td>
              <td>
                <select value={op1} onChange={(e) => setOp1(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                Are you confident that you can apply what I have learnt.
              </td>
              <td>
                <select value={op2} onChange={(e) => setOp2(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                I was able to do research or activities on my own.
              </td>
              <td>
                <select value={op3} onChange={(e) => setOp3(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                I shared useful ideas and resources with my team.
              </td>
              <td>
                <select value={op4} onChange={(e) => setOp4(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                I find the guides given to me useful for deepening my
                understanding.
              </td>
              <td>
                <select value={op5} onChange={(e) => setOp5(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                Do you feel that you spent the time to perform quality work?
              </td>
              <td>
                <select value={op6} onChange={(e) => setOp6(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
            </tr>

            {showOptionsError && (
              <div className="error">
                <p className="error">Please select a value for all options</p>
              </div>
            )}

            <tr>
              <td className="td-se-question"> Other Comments:</td>
              <td>
                <textarea
                  rows="4"
                  cols="50"
                  value={feedback_text}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  required
                />

                {formErrors.feedback_text && (
                  <p className="error">{formErrors.feedback_text}</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="btn btn-primary float-right mt-5"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
