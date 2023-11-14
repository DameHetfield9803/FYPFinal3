import { useState } from "react";
//import "./Style.css";

export default function SelfEvaluation() {
    function submitForm() {
        //setIsSubmitted(true);

        // if all options are chosen and valid
        if (
            optionOne !== "" &&
            optionTwo !== "" &&
            optionThree !== "" &&
            optionFour !== "" &&
            optionFive !== ""
        ) {
            setIsError(false);
            setIsSubmitted(true);
        }
        else {
            // if some options are not chosen 
            setIsError(true);
            setIsSubmitted(false);
        }
    }

    // gets and sets the fields, 
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    const [optionFour, setOptionFour] = useState("");
    const [optionFive, setOptionFive] = useState("");
    // Form validation
    const [isError, setIsError] = useState(false);

    return (
        <div className="App">
            <div className="container">
                <h1 className="mt-3">Self Evaluation</h1>
                <table className="table table-striped mt-3">
                    <tbody>

                        <tr>
                            <td className="td-se-question">I understood what I did today.</td>
                            <td>
                                <select
                                    onChange={(e) => setOptionOne(e.target.value)}
                                >
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
                            <td className="td-se-question">I am confident that I can apply what I have learnt.</td>
                            <td className="td-se-question">
                                <select
                                    onChange={(e) => setOptionTwo(e.target.value)}
                                >
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
                            <td className="td-se-question">I was able to do research or activities on my own.</td>
                            <td>
                                <select
                                    onChange={(e) => setOptionThree(e.target.value)}
                                >
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
                            <td className="td-se-question">I shared useful ideas and resources with my team.</td>
                            <td>
                                <select
                                    onChange={(e) => setOptionFour(e.target.value)}
                                >
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
                            <td className="td-se-question">I find the guides given to me useful for deepening my understanding.</td>
                            <td>
                                <select
                                    onChange={(e) => setOptionFive(e.target.value)}
                                >
                                    <option value={""}>Choose option</option>
                                    <option value={"SD"}>Strongly Disagree</option>
                                    <option value={"D"}>Disagree</option>
                                    <option value={"N"}>Neutral</option>
                                    <option value={"A"}>Agree</option>
                                    <option value={"SA"}>Strongly Agree</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="btn btn-primary float-right mt-5"
                    onClick={submitForm}
                >
                    Submit
                </button>

                {isSubmitted &&
                    <div className="alert alert-success mt-3">
                        <strong>Success!</strong>
                    </div>
                }

                {isError &&
                    <div className="alert alert-danger mt-3">
                        <strong>Error! </strong>
                        Please complete all the fields
                    </div>
                }

            </div>
        </div>
    );
}
