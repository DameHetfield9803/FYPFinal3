import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function App() {
  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null
    }
  ]);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (inputList.length > 0) {
      inputList[inputList.length - 1].input === ""
        ? setIsDisabled(true)
        : setIsDisabled(false);
    }
  }, [inputList]);

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        input: "",
        input_rank: null
      }
    ]);
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newInputList = [...inputList];
    newInputList[index].input = value;
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
        <a href="http://localhost:3000/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>
        <a href="http://localhost:3000/Dashboard">Dashboard</a>
        <a href="http://localhost:3000/Attendance">Attendance</a>
        <a href="http://localhost:3000/Accolades">Accolades</a>
        <a href="http://localhost:3000/AppraisalForm">AppraisalForm</a>

       
        {/* My Profile link */}
<a href="/Profile" className="profile">
  <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
  <span>My Profile</span>
</a>

      </div>
      <h1>Enter the appraisal performance </h1>

      {inputList.length > 0 ? (
        inputList.map((input, index) => (
          <div key={index} className="input-group" style={inputStyles}>
            <input
              type="text"
              className="form-control"
              placeholder={`Input ${index + 1}`}
              value={input.input}
              onChange={(event) => handleInputChange(event, index)}
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
  );
}

const btnStyle = {
  marginTop: "1rem"
};

const inputStyles = {
  marginTop: "1rem"
};
