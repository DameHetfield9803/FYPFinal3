import React, { useEffect, useState } from "react";
import "./Accolades.css"; 

const Accolades = () => {
  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null,
      dropdown1: "",
      dropdown2: "",
      textarea1: "",
      file: null,
    },
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
        !lastInput.file;

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
        file: null,
      },
    ]);
  };

  const handleInputChange = (event, index, field) => {
    const { value, files } = event.target;
    const newInputList = [...inputList];
    newInputList[index][field] = field === "file" ? files[0] : value;
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
      {/* NAVBAR ITEMS */}
      <div className="topnav">
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>
        <a href="/Attendance">Attendance</a>
        <a href="/Accolades">Accolades</a>
        <a href="/AppraisalForm">AppraisalForm</a>

        {/* My Profile link */}
        <a href="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
          <span>My Profile</span>
        </a>
      </div>
      {/*END OF NAVBAR ITEMS */}

      <h1>Accolades page</h1>

      <div className="App">
        <h1>Input your accolades achievement</h1>

        {inputList.length > 0 ? (
          inputList.map((input, index) => (
            <div key={index} className="input-group" style={inputStyles}>
              <input
                type="text"
                className="form-control"
                placeholder={`Employee Name`}
                value={input.input}
                onChange={(event) => handleInputChange(event, index, "input")}
              />
              <select
                className="form-control"
                value={input.dropdown1}
                onChange={(event) => handleInputChange(event, index, "dropdown1")}
              >
                <option value="">Select Department</option>
                <option value="HQ">HQ</option>
                <option value="MC">MC</option>
                <option value="BMW">BMW</option>
              </select>
              <textarea
                className="form-control"
                placeholder={`Description`}
                value={input.textarea1}
                onChange={(event) => handleInputChange(event, index, "textarea1")}
              />
              <select
                className="form-control"
                value={input.dropdown2}
                onChange={(event) => handleInputChange(event, index, "dropdown2")}
              >
                <option value="">Select Achievement Level</option>
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
                <option value="Level 3">Level 3</option>
                
              </select>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  onChange={(event) => handleInputChange(event, index, "file")}
                />
                <label className="custom-file-label">
                  {input.file ? input.file.name : "Choose file"}
                </label>
              </div>
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
};

const btnStyle = {
  marginTop: "1rem",
};

const inputStyles = {
  marginTop: "1rem",
};

export default Accolades;
