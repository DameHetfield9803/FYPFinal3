import React from 'react';
import './Employee.css';


const EmpTab = () => {
    return (
        <div>
            {/* NAVBAR ITEMS */}
            <div className="topnav">
                <a href="/Home" className="logo-link">
                    <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
                </a>
                <a href="/Attendance">Attendance</a>
                <a href="/Accolades">Accolades</a>
                <a href="/AppraisalForm">AppraisalForm</a>

                {/* My Profile link */}
                <a href="/Profile" className="profile">
                    <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
                    <span>My Profile</span>
                </a>
            </div>
            {/* END OF NAVBAR ITEMS */}

            {/* A div with a className of 'Table'. This can be used for styling purposes. */}
            <div className="Table">
                {/* A table with a className of 'bordered-table'. This class should have styles for creating borders */}
                <table className="bordered-table">
                    {/* Table header section */}
                    <thead>
                        {/* A table row in the header with three cells (th elements) */}
                        <tr>
                            <th>BatchNo</th>
                            <th>EmpName</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    {/* Table body section */}
                    <tbody>
                        {/* A table row with three cells (td elements) */}
                        <tr>
                            {/* Cell containing the employee name */}
                            <td>110504</td>
                            {/* Cell containing the batch number */}
                            <td>Firdaus</td>
                            {/* Cell containing the department name */}
                            <td>BMW</td>
                        </tr>
                        {/* Additional rows can be added as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmpTab;
