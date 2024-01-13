import React, { useState } from 'react';
import attendanceData from './AttendanceData.json'; // this is to import the Json file to the attendnace page
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import './Attendance.css'; //not using now 
import Navbar from '../NavBar/NavBar';

export default function Attendance() {
  const history = useHistory();
  const [jsonData] = useState(attendanceData);
  const [filter, setFilter] = useState('');

  const logout = async () => {
    try {
      await signOut(auth);
      history.push('/');
    } catch (err) {
      console.error(err);
      //This is to display an error message to the user if needed
    }
  };

  const getStatus = (adjIn) => {
    if (!adjIn || adjIn.trim() === '') {
      // this is to show not present if "Adj in" is blank 
      return 'Not Present';
    }

    const adjInTime = new Date(`2000-01-01T${adjIn}`);
    const eightAM = new Date(`2000-01-01T08:00:00`);

    if (adjInTime > eightAM) {
      return 'Late';
    } else {
      return 'Present';
    }
  };

  const filteredData = jsonData.filter((entry) =>
    entry.BatchNO.toString().includes(filter)
  );

  
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mt-3">
        <label htmlFor="filterInput" className="form-label">
          Filter by BatchNumber:
        </label>
        <input
          type="text"
          id="filterInput"
          className="form-control"
          placeholder="Enter BatchNO"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="container mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>BatchNO</th>
              <th>DATE</th>
              <th>DEPT</th>
              <th>Week Day</th>
              <th>Shift Code</th>
              <th>Emp Name</th>
              {/* <th>Time In</th>
              <th>Time Out</th> */}
              <th>Adj In</th>
              <th>Adj Out</th>
              <th>Remarks</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((entry, entryIndex) => (
              <tr key={entryIndex}>
                <td>{entry.BatchNO}</td>
                <td>{entry.DATE}</td>
                <td>{entry.DEPT}</td>
                <td>{entry['Week Day']}</td>
                <td>{entry['Shift Code']}</td>
                <td>{entry['Emp Name']}</td>
                {/* <td>{entry['Time In']}</td>
                <td>{entry['Time Out']}</td> */}
                <td>{entry['Adj In']}</td>
                <td>{entry['Adj Out']}</td>
                <td>{entry.Remark}</td>
                <td
                  style={{
                    backgroundColor:
                      getStatus(entry['Adj In']) === 'Not Present'
                        ? 'red'
                        : getStatus(entry['Adj In']) === 'Present'
                        ? 'green'
                        : 'inherit',
                  
                    }}
                >
                  {getStatus(entry['Adj In'])}
                  {/* {getStatus(entry["Adj In"]) */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mt-3">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
