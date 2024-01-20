import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import attendanceData from './AttendanceData.json';

export default function Attendancesummary() {
  const history = useHistory();
  const [jsonData] = useState(attendanceData);
  const [filter, setFilter] = useState('');
  const [batchData, setBatchData] = useState([]);
  const [uniqueBatchNos, setUniqueBatchNos] = useState([]);

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
    // Calculate counts and percentages for the entire jsonData
    const countsForAll = { Present: 0, 'Not Present': 0, Late: 0 };
    const batchDataForAll = [];

    jsonData.forEach((entry) => {
      // Skip entries for 'Sat' and 'Sun'
      if (['Sat', 'Sun'].includes(entry['Week Day'])) {
        return;
      }

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

    // You can use these counts to display the overall counts and percentages in the table
    const totalEntriesForAll = countsForAll.Present + countsForAll['Not Present'];
    const percentageForAll = totalEntriesForAll === 0 ? 0 : Math.floor((countsForAll.Present / totalEntriesForAll) * 100);

    // Use these counts and percentages in your table
    setBatchData(batchDataForAll);
    setUniqueBatchNos(Array.from(new Set(batchDataForAll.map((entry) => entry.BatchNO))));
  }, [jsonData]);

  return (
    <div>
      <div className="container mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>BatchNO</th>
              <th>Present</th>
              <th>Not Present</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>
            {uniqueBatchNos.map((batchNo, batchIndex) => {
              const batchEntry = batchData.find((entry) => entry.BatchNO === batchNo);

              return (
                <tr key={batchIndex}>
                  <td>{batchNo}</td>
                  <td>{batchEntry.Present}</td>
                  <td>{batchEntry['Not Present']}</td>
                  <td>{Math.floor((batchEntry.Present / (batchEntry.Present + batchEntry['Not Present'])) * 100)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="container mt-3">
      </div>
    </div>
  );
}
