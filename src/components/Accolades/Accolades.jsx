import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Accolades.css";
import Navbar from "../NavBar/NavBar";
import axios from 'axios';
const Accolades = () => {
  const [inputList, setInputList] = useState([
    {
      staffId: 0,
      accoladeTitle: "",
      completionDate: "",
      file: null,
      achievementLevel: 0,
    },
  ]);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (inputList.length > 0) {
      const lastInput = inputList[inputList.length - 1];
      const isLastInputEmpty =
        lastInput.staffId === "" &&
        lastInput.accoladeTitle === "" &&
        lastInput.completionDate === "" &&
        !lastInput.file &&
        lastInput.achievementLevel === "";

      setIsDisabled(isLastInputEmpty);
    }
  }, [inputList]);

  const handleInputChange = (event, index, field) => {
    const { value, files } = event.target;
    const newInputList = [...inputList];

    if (field === "file" && files && files.length > 0) {
      const fileName = files[0].name;
      const fileExtension = fileName.split(".").pop().toLowerCase();

      const allowedFileExtensions = ["pdf", "jpg", "jpeg", "png"];

      if (!allowedFileExtensions.includes(fileExtension)) {
        console.error("Invalid file extension. Please choose a valid file (PDF, JPG, JPEG).");
        return;
      }
    }

    if (field === "completionDate") {
      newInputList[index][field] = value; // Assuming you're using a text input for date
    } else {
      newInputList[index][field] = field === "file" ? files[0] : value;
    }

    setInputList(newInputList);
  };

  const handleRemoveItem = (index) => {
    if (inputList.length > 1) {
      const newList = [...inputList];
      newList.splice(index, 1);
      setInputList(newList);
    }
  };

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        staffId: 0,
        accoladeTitle: "",
        completionDate: "",
        file: null,
        achievementLevel: 0,
      },
    ]);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="topnav"></div>
      <h1>Accolades page</h1>
      <b> <p className="mt-3 text-center">(NATIONAL/ LEVEL 3, GOVERNMENT/ LEVEL 2 , COMMUNITY LEVEL 1 )</p></b>
      <div className="App">
        <h1>Input your accolades achievement</h1>

        {inputList.length > 0 ? (
          inputList.map((input, index) => (
            <div key={index} className="input-group" style={inputStyles}>
              <input
                type="text"
                className="form-control"
                placeholder={`Staff ID`}
                value={input.staffId}
                onChange={(event) => handleInputChange(event, index, "staffId")}
              />
              <input
                type="text"
                className="form-control"
                placeholder={`Accolade Title`}
                value={input.accoladeTitle}
                onChange={(event) => handleInputChange(event, index, "accoladeTitle")}
              />
              <DatePicker
                selected={input.completionDate ? new Date(input.completionDate) : null}
                onChange={(date) =>
                  handleInputChange(
                    { target: { value: date }, files: [] },
                    index,
                    "completionDate"
                  )
                }
                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Select Completion Date"
              />
              <select
                className="form-control"
                value={input.achievementLevel}
                onChange={(event) => handleInputChange(event, index, "achievementLevel")}
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
                  accept=".pdf, image/*"
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
