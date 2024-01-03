import { useState } from "react";
import "./PeerEvaluation.css";
import Navbar from "../NavBar/NavBar";

export default function PeerEvaluation() {
  // gets and sets the fields
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [comments, setComments] = useState(""); // Added comments state
  const [isError, setIsError] = useState(false);

  function submitForm() {
    // if all options are chosen and valid
    if (
      optionOne !== "" &&
      optionTwo !== "" &&
      optionThree !== "" &&
      optionFour !== "" &&
      comments.trim() !== "" // Check if comments are not empty
    ) {
      setIsError(false);
      setIsSubmitted(true);
    } else {
      // if some options are not chosen or comments are empty
      setIsError(true);
      setIsSubmitted(false);
    }
  }

  return (
    
    <div className="App">
      <div className="container">
        <h1 className="mt-3">Peer Evaluation</h1>
        <table className="table table-striped mt-3">
          <tbody>
            <tr>
              <td className="td-se-question">The team member was cooperative</td>
              <td>
                <select onChange={(e) => setOptionOne(e.target.value)}>
                  <option value={""}>Choose option</option>
                  <option value={"SD"}>Strongly Disagree</option>
                  <option value={"D"}>Disagree</option>
                  <option value={"N"}>Neutral</option>
                  <option value={"A"}>Agree</option>
                  <option value={"SA"}>Strongly Agree</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                This team member completed the task assigned to our team.
              </td>
              <td className="td-se-question">
                <select onChange={(e) => setOptionTwo(e.target.value)}>
                  <option value={""}>Choose option</option>
                  <option value={"SD"}>Strongly Disagree</option>
                  <option value={"D"}>Disagree</option>
                  <option value={"N"}>Neutral</option>
                  <option value={"A"}>Agree</option>
                  <option value={"SA"}>Strongly Agree</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                This team member did more than what was expected.
              </td>
              <td>
                <select onChange={(e) => setOptionThree(e.target.value)}>
                  <option value={""}>Choose option</option>
                  <option value={"SD"}>Strongly Disagree</option>
                  <option value={"D"}>Disagree</option>
                  <option value={"N"}>Neutral</option>
                  <option value={"A"}>Agree</option>
                  <option value={"SA"}>Strongly Agree</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                This team member contributed useful ideas.
              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
                  <option value={""}>Choose option</option>
                  <option value={"SD"}>Strongly Disagree</option>
                  <option value={"D"}>Disagree</option>
                  <option value={"N"}>Neutral</option>
                  <option value={"A"}>Agree</option>
                  <option value={"SA"}>Strongly Agree</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                This team member contributed useful ideas.
              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
                  <option value={""}>Choose option</option>
                  <option value={"SD"}>Strongly Disagree</option>
                  <option value={"D"}>Disagree</option>
                  <option value={"N"}>Neutral</option>
                  <option value={"A"}>Agree</option>
                  <option value={"SA"}>Strongly Agree</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                This team member contributed useful ideas.
              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
                  <option value={""}>Choose option</option>
                  <option value={"SD"}>Strongly Disagree</option>
                  <option value={"D"}>Disagree</option>
                  <option value={"N"}>Neutral</option>
                  <option value={"A"}>Agree</option>
                  <option value={"SA"}>Strongly Agree</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question"> Other Comments:</td>
              <td>
                <textarea
                  rows="4"
                  cols="50"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="btn btn-primary float-right mt-5"
          onClick={submitForm}
        >
          Submit
        </button>

        {isSubmitted && (
          <div className="alert alert-success mt-3">
            <strong>Success!</strong>
          </div>
        )}

        {isError && (
          <div className="alert alert-danger mt-3">
            <strong>Error! </strong>Please complete all the fields before
            submitting.
          </div>
        )}
      </div>
      
   </div>
    
  );
}
