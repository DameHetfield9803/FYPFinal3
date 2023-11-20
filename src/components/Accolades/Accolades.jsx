// Accolades.jsx

import React, { useEffect, useState } from "react";

export default function Accolades() {
  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null,
      dropdown1: "",
      dropdown2: "",
      textarea1: "",
      textarea2: ""
    }
  ]);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (inputList.length > 0) {
      const lastInput = inputList[inputList.length - 1];
      const isLastInputEmpty =
        lastInput.input === "" &&
        lastInput.dropdown1 === "" &&
        lastInput.textarea1 === "" &&
        lastInput.dropdown2 === "" &&
        lastInput.textarea2 === "";

      setIsDisabled(isLastInputEmpty);
    }
  }, [inputList]);

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        input: "",
        input_rank: null,
        dropdown1: "",
        dropdown2: "",
        textarea1: "",
        textarea2: ""
      }
    ]);
  };

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const newInputList = [...inputList];
    newInputList[index][field] = value;
    newInputList[index].input_rank = index + 1;
    setInputList(newInputList);
  };

  const handleRemoveItem = (index) => {
    if (inputList.length > 1) {
      const newList = [...inputList];
      newList.splice(index, 1);
      setInputList(newList);
    }
  };

  return (
    <div>
      <div className="topnav">
        {/* Place the logo directly in the topnav and adjust the order */}
        <a href="http://localhost:3000/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>

        <a href="http://localhost:3000/Dashboard">Dashboard</a>
        <a href="http://localhost:3000/Attendance">Attendance</a>
        <a href="http://localhost:3000/Accolades">Accolades</a>
        <a href="http://localhost:3000/AppraisalForm">AppraisalForm</a>
      </div>

      <h1>Accolades page</h1>

      {/* Include the App component content here */}
      <div className="App">
        <h1>Enter the appraisal performance </h1>

        {inputList.length > 0 ? (
          inputList.map((input, index) => (
            <div key={index} className="input-group" style={inputStyles}>
              <input
                type="text"
                className="form-control"
                placeholder={`Input ${index + 1}`}
                value={input.input}
                onChange={(event) => handleInputChange(event, index, "input")}
              />
              <select
                className="form-control"
                value={input.dropdown1}
                onChange={(event) =>
                  handleInputChange(event, index, "dropdown1")
                }
              >
                {/* Updated options for dropdown1 */}
                <option value="">Select Department</option>
                <option value="Financial Department">Financial Department</option>
                <option value="Logistics Department">Logistics Department</option>
                <option value="Sales Department">Sales Department</option>
                <option value="IT Department">IT Department</option>
                {/* Add more options as needed */}
              </select>
              <textarea
                className="form-control"
                placeholder={`Textarea 1`}
                value={input.textarea1}
                onChange={(event) =>
                  handleInputChange(event, index, "textarea1")
                }
              />
              <select
                className="form-control"
                value={input.dropdown2}
                onChange={(event) =>
                  handleInputChange(event, index, "dropdown2")
                }
              >
                {/* Add options for dropdown2 */}
                <option value="">Select Option 2</option>
                {/* Add more options as needed */}
              </select>
              <textarea
                className="form-control"
                placeholder={`Textarea 2`}
                value={input.textarea2}
                onChange={(event) =>
                  handleInputChange(event, index, "textarea2")
                }
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No item in the list</p>
        )}
        <button
          className="btn btn-primary"
          style={btnStyle}
          onClick={handleListAdd}
          disabled={isDisabled}
        >
          Add choice
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  marginTop: "1rem"
};

const inputStyles = {
  marginTop: "1rem"
};
