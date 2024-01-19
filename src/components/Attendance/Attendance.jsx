import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import './Attendance.css';
import attendanceData from './AttendanceData.json';

export default function Attendance() {
  const history = useHistory();
  const [jsonData] = useState(attendanceData);
  const [filter, setFilter] = useState(0);
  const [presentCount, setPresentCount] = useState(0);
  const [notPresentCount, setNotPresentCount] = useState(0);
  const [lateCount, setLateCount] = useState(0);
  const [presentToTotalPercentage, setPresentToTotalPercentage] = useState(0);

  const logout = async () => {
    try {
      await signOut(auth);
      history.push('/');
    } catch (err) {
      console.error(err);
      // This is to display an error message to the user if needed
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

  // Declare filteredData here
  const filteredData = jsonData
    .filter((entry) => entry.BatchNO.toString().includes(filter))
    .filter((entry) => !['Sat', 'Sun'].includes(entry['Week Day']));

  useEffect(() => {
    // Update counts based on filtered data
    const counts = { Present: 0, 'Not Present': 0, Late: 0 };

    filteredData.forEach((entry) => {
      const status = getStatus(entry['Adj In']);
      counts[status]++;
    });

    setPresentCount(counts.Present);
    setNotPresentCount(counts['Not Present']);
    setLateCount(counts.Late);

    // Calculate the new percentage and update the state
    const totalEntries = counts.Present + counts['Not Present'];
    const percentage = Math.floor((counts.Present / totalEntries) * 100);
    setPresentToTotalPercentage(isNaN(percentage) ? 0 : percentage);
  }, [filter, jsonData, filteredData]);

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
        <p>Total Present: {presentCount}</p>
        <p>Total Not Present: {notPresentCount}</p>
        <p>Total Late: {lateCount}</p>
        <p>Present to Total Percentage: {presentToTotalPercentage.toFixed(2)}%</p>

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
      </div>

      <div className="container mt-3">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
