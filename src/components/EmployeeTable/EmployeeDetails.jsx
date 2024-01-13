import React, { useState, useEffect } from 'react';
import employeeData from './EmployeeData.json';



const EmployeeDetails = ({ match }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        // Retrieve the employee details based on the id parameter
        const employeeId = parseInt(match.params.id, 10);
        const selectedEmployee = employeeData[employeeId];

        // Update the state with the selected employee details
        setEmployee(selectedEmployee);
    }, [match.params.id]);

    if (!employee) {
        return <div>Loading...</div>; // You can add a loading indicator here
    }

    return (

        <div>
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
                {/* Add more details as needed */}
            </ul>
        </div>
    );
};

export default EmployeeDetails;
