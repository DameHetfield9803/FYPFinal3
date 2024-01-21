import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import * as XLSX from 'xlsx';
import { read } from 'xlsx';
import Navbar from '../NavBar/NavBar';

export default function AttendanceAdd() {
  const history = useHistory();
  const [excelFile, setExcelFile] = useState(null);
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
      // Display an error message to the user if needed
    }
  };

  const getStatus = (adjIn) => {
    if (typeof adjIn !== 'string' || adjIn.trim() === '') {
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setExcelFile(file);
  };

  const handleUpload = () => {
    if (excelFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = read(data, { type: 'array' });
          // Assuming the first sheet contains attendance data
          const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

          // Transform Excel data into the format expected by the Attendance page
          const transformedData = sheetData.map((entry) => {
            // Adjust the property names based on your Excel file
            const adjInTime = new Date(`2000-01-01T${entry['Adj In']}`);
            const adjOutTime = new Date(`2000-01-01T${entry['Adj Out']}`);
            return {
              BatchNO: entry.BatchNO,
              DATE: adjInTime.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
              DEPT: entry.DEPT,
              'Week Day': entry['Week Day'],
              'Shift Code': entry['Shift Code'],
              'Emp Name': entry['Emp Name'],
              'Adj In': adjInTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
              'Adj Out': adjOutTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
              Remark: entry.Remark,
            };
          });

          setJsonData(transformedData);
        } catch (error) {
          console.error('Error reading Excel file:', error);
        }
      };
      reader.readAsArrayBuffer(excelFile);
    }
  };

  useEffect(() => {
    // Fetch distinct BatchNO values
    const distinctBatches = [...new Set(jsonData.map((entry) => entry.BatchNO))];
    setBatchOptions(distinctBatches);
  }, [jsonData]);

  useEffect(() => {
    // Update counts based on filtered data
    const filteredData = jsonData
      .filter((entry) => (selectedBatch ? entry.BatchNO.toString() === selectedBatch : true))
      .filter((entry) => !['Sat', 'Sun'].includes(entry['Week Day']));

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
  }, [selectedBatch, jsonData]);

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h2>Upload Excel File</h2>
        <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
        <button className="btn btn-primary mt-2" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {jsonData && (
        <div className="container mt-3">
          <h3>Excel Data</h3>
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
              {jsonData.map((entry, entryIndex) => (
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
      )}

      <div className="container mt-3">
        <button className="btn btn-secondary" onClick={() => history.push('/Attendance')}>
          Back to Attendance
        </button>
      </div>

      <div className="container mt-3">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
