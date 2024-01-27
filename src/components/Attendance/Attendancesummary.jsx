import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import attendanceData from './AttendanceData.json';

export default function Attendancesummary() {
  const history = useHistory();
  const [jsonData] = useState(attendanceData);
  const [batchData, setBatchData] = useState([]);
  const [uniqueBatchNos, setUniqueBatchNos] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');

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

  useEffect(() => {
    // Filter out entries for 'Sat' and 'Sun' when importing the JSON data
    const filteredData = jsonData.filter((entry) => !['Sat', 'Sun'].includes(entry['Week Day']));

    // Calculate counts and percentages for the entire filteredData
    const countsForAll = { Present: 0, 'Not Present': 0, Late: 0 };
    const batchDataForAll = [];

    filteredData.forEach((entry) => {
      const status = getStatus(entry['Adj In']);
      countsForAll[status]++;

      const index = batchDataForAll.findIndex((batch) => batch.BatchNO === entry.BatchNO);

      if (index === -1) {
        batchDataForAll.push({
          BatchNO: entry.BatchNO,
          Present: 0,
          'Not Present': 0,
          Late: 0,
        });
      }

      const batchEntry = batchDataForAll.find((batch) => batch.BatchNO === entry.BatchNO);
      batchEntry[status]++;
    });

    // Use these counts and percentages in your table
    setBatchData(batchDataForAll);
    setUniqueBatchNos(Array.from(new Set(batchDataForAll.map((entry) => entry.BatchNO))));
  }, [jsonData]);

  const handleAddToDatabase = async () => {
    try {
      // Filter out the batch data that is currently displayed in the table
      const displayedBatchData = batchData.filter(entry => uniqueBatchNos.includes(entry.BatchNO));
  
      // Perform POST request to add attendance summary data to the database
      // Modify the endpoint and data structure as per your backend requirements
      const response = await axios.post('http://localhost:3001/addattendancesummary', displayedBatchData);
      
      if (response.status === 200) {
        setVerificationMessage('Attendance summary added successfully!');
        // Clear verification message after 3 seconds
        setTimeout(() => {
          setVerificationMessage('');
        }, 3000);
      } else {
        throw new Error('Failed to add attendance summary');
      }
    } catch (error) {
      console.error('Error adding attendance summary:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <h1>Attendance Summary for the Month</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Staff_id</th>
              <th>Emp Name</th>
              <th>Month</th>
              <th>Year</th>
              <th>Present</th>
              <th>Not Present</th>
              <th>Late</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>
            {uniqueBatchNos.map((batchNo, batchIndex) => {
              const batchEntries = jsonData.filter((entry) => entry.BatchNO === batchNo);
              const batchEntry = batchData.find((entry) => entry.BatchNO === batchNo);
              const dateParts = batchEntries[0].DATE.split('/'); // Split the date string into parts
              const date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`); // Construct the Date object with correct format
              const month = date.toLocaleString('default', { month: 'long' });
              const year = date.getFullYear();
              const rawdata = batchEntry.Present / (batchEntry.Present + batchEntry['Not Present'] + batchEntry.Late);
              const percentage = Math.floor(rawdata * 100);

              return (
                <tr key={batchIndex}>
                  <td>{batchNo}</td>
                  <td>{batchEntries[0]['Emp Name']}</td>
                  <td>{month}</td>
                  <td>{year}</td>
                  <td>{batchEntry.Present}</td>
                  <td>{batchEntry['Not Present']}</td>
                  <td>{batchEntry.Late}</td>
                  <td style={{ backgroundColor: percentage < 50 ? 'red' : 'inherit' }}>{percentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="container mt-3">
        <button className="btn btn-primary" onClick={handleAddToDatabase}>
          Add Attendance Summary to Database
        </button>
      </div>

      {verificationMessage && <p>{verificationMessage}</p>}

      <div className="container mt-3">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
