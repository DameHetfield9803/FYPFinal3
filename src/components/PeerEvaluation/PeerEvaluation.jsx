import { useState } from "react";
import "./PeerEvaluation.css";
import Navbar from "../NavBar/NavBar";

export default function PeerEvaluation() {
  // gets and sets the fields
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [optionOne, setOptionOne] = useState(0);
  const [optionTwo, setOptionTwo] = useState(0);
  const [optionThree, setOptionThree] = useState(0);
  const [optionFour, setOptionFour] = useState(0);
  const [comments, setComments] = useState(""); // Added comments state
  const [isError, setIsError] = useState(false);

  function submitForm() {
    // if all options are chosen and valid
    if (
      optionOne !== 0 &&
      optionTwo !== 0 &&
      optionThree !== 0 &&
      optionFour !== 0 &&
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
    <div>
      <Navbar></Navbar>
    <div className="App">
          <form method='post' action='localhost:3001/peerfeedback'>
      <div className="container">
        <h1 className="mt-3">Peer Evaluation</h1>
       <b> <p className="mt-3">(Lowest Rating: 1, Neutral : 3, Highest Rating: 5)</p></b>
        <table className="table table-striped mt-3">
          <tbody>
            <tr>
              <td className="td-se-question">The team member was cooperative</td>
              <td>
                <select onChange={(e) => setOptionOne(e.target.value)}>
                  <option value={0}>Choose option </option>
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
                This team member completed the task assigned to our team.
              </td>
              <td className="td-se-question">
                <select onChange={(e) => setOptionTwo(e.target.value)}>
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
                This team member did more than what was expected.
              </td>
              <td>
                <select onChange={(e) => setOptionThree(e.target.value)}>
                  <option value={0}>Choose option</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5 </option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td-se-question">
                This team member contributed useful ideas.
              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
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
              This team member has strong interpersonal skills and helps everyone feel welcome on the team.              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
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
                This team member contributed useful ideas.
              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
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
              This team member exhibits strong leadership skills
              </td>
              <td>
                <select onChange={(e) => setOptionFour(e.target.value)}>
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
          formMethod="post"
          formAction="localhost:3001/peerfeedback"
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
      </form>
   </div>
    </div>
  );
}
