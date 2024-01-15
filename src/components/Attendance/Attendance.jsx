import React, { useState } from 'react';
import attendanceData from './AttendanceData.json';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import './Attendance.css';

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
      // Display an error message to the user if needed
    }
  };

  const getStatus = (adjIn) => {
    if (!adjIn || adjIn.trim() === '') {
      return 'Not Present';
    }

    const adjInTime = new Date(`2000-01-01T${adjIn}`);
    const eightAM = new Date(`2000-01-01T08:00:00`);

    if (
      adjInTime.getHours() > eightAM.getHours() ||
      (adjInTime.getHours() === eightAM.getHours() && adjInTime.getMinutes() > eightAM.getMinutes())
    ) {
      return 'Late';
    } else {
      return 'Present';
    }
  };

  const filteredData = jsonData
    .filter((entry) => entry.BatchNO.toString().includes(filter))
    .filter((entry) => !['Sat', 'Sun'].includes(entry['Week Day']));

  return (
    <div>
      <Navbar />
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
