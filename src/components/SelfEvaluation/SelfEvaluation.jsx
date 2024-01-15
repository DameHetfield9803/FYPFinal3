import { useState } from "react";
import "./SelfEvaluation.css";

export default function SelfEvaluation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [optionFive, setOptionFive] = useState("");
  const [comments, setComments] = useState("");
  const [isError, setIsError] = useState(false);

  function submitForm() {
    setIsSubmitted(true);

    if (
      optionOne !== "" &&
      optionTwo !== "" &&
      optionThree !== "" &&
      optionFour !== "" &&
      optionFive !== ""
    ) {
      setIsError(false);
      setIsSubmitted(true);
    } else {
      setIsError(true);
      setIsSubmitted(false);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-3">Self Evaluation</h1>
        <b> <p className="mt-3">(Lowest Rating: 1, Neutral : 3, Highest Rating: 5)</p></b>
        <table className="table table-striped mt-3">
          <tbody>
            <tr>
              <td className="td-se-question">Do you understood what you did today.</td>
              <td>
                <select onChange={(e) => setOptionOne(e.target.value)}>

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
                I was able to do research or activities on my own.
              </td>
              <td>
                <select onChange={(e) => setOptionThree(e.target.value)}>              
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
                I find the guides given to me useful for deepening my understanding.
              </td>
              <td>
                <select onChange={(e) => setOptionFive(e.target.value)}>
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
                <select onChange={(e) => setOptionFive(e.target.value)}>
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
            <strong>Error! </strong>Please complete all the fields
          </div>
        )}
      </div>
    </div>
  );
}
