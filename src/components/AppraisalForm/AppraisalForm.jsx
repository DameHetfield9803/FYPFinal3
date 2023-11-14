import { useState } from "react";
export default function AppraisalForm() {
    function submitForm() {
        //setIsSubmitted(true);

        // if all options are chosen and valid
        if (
            optionOne !== "" &&
            optionTwo !== "" &&
            optionThree !== "" &&
            optionFour !== "" &&
            optionFive !== "" &&
            optionSix !== "" &&
            optionSeven !== "" &&
            optionEight !== "" &&
            optionNine !== "" &&
            optionTen !== ""
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
    const [optionSix, setOptionSix] = useState("");
    const [optionSeven, setOptionSeven] = useState("");
    const [optionEight, setOptionEight] = useState("");
    const [optionNine, setOptionNine] = useState("");
    const [optionTen, setOptionTen] = useState("");
    const [isError, setIsError] = useState(false);

    return (
        <div>
            <div>
                <h1>Appraisal Form</h1>
                <table>
                    <tbody>

                        <tr>
                            <td className="app-q-1">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionOne(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-2">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionTwo(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-3">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionThree(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-4">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionFour(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-5">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionFive(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-6">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionSix(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-7">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionSeven(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-8">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionEight(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-9">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionNine(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
                        </tr>

                        <tr>
                            <td className="app-q-10">Pending...</td>
                            <td>                                <select
                                onChange={(e) => setOptionTen(e.target.value)}
                            >
                                <option value={""}>Choose option</option>
                                <option value={"SD"}>Strongly Disagree</option>
                                <option value={"D"}>Disagree</option>
                                <option value={"N"}>Neutral</option>
                                <option value={"A"}>Agree</option>
                                <option value={"SA"}>Strongly Agree</option>
                            </select></td>
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
                        Please complete all the fields before submitting.
                    </div>
                }
            </div>
        </div>
    )
}