import React, { useState, useEffect } from 'react';
import employeeData from './EmployeeData.json';
import './EmployeeDetails.css';


const EmployeeDetails = ({ match }) => {
    // State to store the selected employee details
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        // Retrieve the employee details based on the id parameter
        const employeeId = parseInt(match.params.id, 10);
        const selectedEmployee = employeeData[employeeId];

        // Update the state with the selected employee details
        setEmployee(selectedEmployee);
    }, [match.params.id]);
    // If employee details are not yet available, display a loading indicator
    if (!employee) {
        return <div>Loading...</div>; // Loading indicator
    }

    return (

        <div className="centrecontainer" >
            <h2>Employee Details</h2>
            <ul>
                <li>
                    <strong>BatchNO:</strong> {employee.BatchNO}
                </li>
                <li>
                    <strong>DEPT:</strong> {employee.DEPT}
                </li>
                <li>
                    <strong>Shift Code:</strong> {employee['Shift Code']}
                </li>
                <li>
                    <strong>Emp Name:</strong> {employee['Emp Name']}
                </li>
            </ul>
        </div>


    );
};

export default EmployeeDetails;
