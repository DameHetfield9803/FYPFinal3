import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import './Attendance.css';
import Navbar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

export default function Attendance() {
  const history = useHistory();
  const [jsonData, setJsonData] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState('');
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
    }
  };

  const getStatus = (adjIn) => {
    if (!adjIn || typeof adjIn !== 'string') {
      return 'Not Present';
    }
  
    const trimmedAdjIn = adjIn.trim();
    if (trimmedAdjIn === '') {
      return 'Not Present';
    }
  
    const adjInTime = new Date(`2000-01-01T${trimmedAdjIn}`);
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
  
  const formatDate = (dateString) => {
    return dateString || ""; // Return the original date string as is
  };
  
  const filteredData = jsonData
    .filter((entry) => (selectedBatch ? entry.BatchNO.toString() === selectedBatch : true))
    .filter((entry) => !['Sat', 'Sun'].includes(entry['Week Day']));

  useEffect(() => {
    const distinctBatches = [...new Set(jsonData.map((entry) => entry.BatchNO))];
    setBatchOptions(distinctBatches);
  }, [jsonData]);

  useEffect(() => {
    const counts = { Present: 0, 'Not Present': 0, Late: 0 };

    filteredData.forEach((entry) => {
      const status = getStatus(entry['Adj In']);
      counts[status]++;
    });

    setPresentCount(counts.Present);
    setNotPresentCount(counts['Not Present']);
    setLateCount(counts.Late);

    const totalEntries = counts.Present + counts['Not Present'];
    const percentage = Math.floor((counts.Present / totalEntries) * 100);
    setPresentToTotalPercentage(isNaN(percentage) ? 0 : percentage);
  }, [selectedBatch, jsonData, filteredData]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const excelData = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          raw: false, // Ensure values are not converted to numbers
        });
  
        console.log('Excel Data:', excelData);
  
        const convertedData = excelData
        .slice(1)
        .map((row, rowIndex) => {
          try {
            const formattedRow = {
              BatchNO: parseInt(row[0]),
              DATE: formatDate(row[1]),
              DEPT: row[2],
              'Week Day': row[3],
              'Shift Code': row[4],
              Remark: row[5],
              'Emp Name': row[6],
              'Adj In': row[9] !== undefined ? row[9].toString() : '', // Convert to string or empty string if undefined
              'Adj Out': row[10] !== undefined ? row[10].toString() : '', // Convert to string or empty string if undefined
            };
            return formattedRow;
          } catch (error) {
            console.error(`Error processing row at index ${rowIndex}:`, error);
            return null; // Return null for the problematic row
          }
        })
        .filter((row) => row !== null); // Filter out problematic rows
      
  
        console.log('Converted Data:', convertedData);
  
        setJsonData(convertedData);
      };
  
      reader.readAsArrayBuffer(file);
    }
  };
  
  
  

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <label htmlFor="fileInput" className="form-label">
          Upload Excel File:
        </label>
        <input
          type="file"
          className="form-control"
          id="fileInput"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />
      </div>

      <div className="container mt-3">
        <label htmlFor="batchSelect" className="form-label">
          Select BatchNO:
        </label>
        <select
          id="batchSelect"
          className="form-select"
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="">All BatchNo</option>
          {batchOptions.map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </select>
      </div>

      <div className="container mt-3">
        <p>Total Present: {presentCount}</p>
        <p>Total Not Present: {notPresentCount}</p>
        <p>Total Late: {lateCount}</p>
        <p>Present to Total Percentage: {presentToTotalPercentage.toFixed(2)}%</p>

        <div className="container mt-3">
          <Link to="/Attendancesummary" className="btn btn-secondary">
            View Attendance Summary
          </Link>
        </div>

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
