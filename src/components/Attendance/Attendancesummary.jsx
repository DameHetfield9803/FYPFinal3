import React from 'react';

const AttendanceSummary = ({ attendanceData }) => {
  // Function to calculate summary for a specific BatchNo
  const calculateBatchSummary = (batchNo) => {
    const batchData = attendanceData.filter((entry) => entry.BatchNO === batchNo);

    // Calculate summary for the batch
    let totalPresent = 0;
    let totalNotPresent = 0;
    let totalLate = 0;

    batchData.forEach((entry) => {
      const adjIn = entry['Adj In'];
      if (!adjIn || adjIn.trim() === '') {
        totalNotPresent++;
      } else {
        const adjInTime = new Date(`2000-01-01T${adjIn}`);
        const eightAM = new Date(`2000-01-01T08:00:00`);

        if (
          adjInTime.getHours() > eightAM.getHours() ||
          (adjInTime.getHours() === eightAM.getHours() && adjInTime.getMinutes() > eightAM.getMinutes())
        ) {
          totalLate++;
        } else {
          totalPresent++;
        }
      }
    });

    const totalEntries = totalPresent + totalNotPresent;
    const percentage = (totalPresent / totalEntries) * 100 || 0;

    return {
      totalPresent,
      totalNotPresent,
      totalLate,
      percentage,
    };
  };

  return (
    <div>
      {/* Iterate through unique BatchNo values */}
      {[...new Set(attendanceData.map((entry) => entry.BatchNO))].map((batchNo) => {
        const batchSummary = calculateBatchSummary(batchNo);

        return (
          <div key={batchNo}>
            <h2>BatchNo: {batchNo}</h2>
            <p>Total Present: {batchSummary.totalPresent}</p>
            <p>Total Not Present: {batchSummary.totalNotPresent}</p>
            <p>Total Late: {batchSummary.totalLate}</p>
            <p>Present to Total Percentage: {batchSummary.percentage.toFixed(2)}%</p>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceSummary;
