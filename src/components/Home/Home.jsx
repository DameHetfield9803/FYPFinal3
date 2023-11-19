import React from 'react';
import './Home.css'; // Import the CSS for your Home component

export default function Home() {
    // Function to get user information, you can add the logic here
    function getUser() {
        // Your function logic here
    }

    return (
        <div>
            {/* Top navigation bar */}
            <div className="topnav">
                {/* Logo link */}
                <a href="http://localhost:3000/Home" className="logo-link">
                    {/* Logo image */}
                    <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
                </a>

                {/* Navigation links */}
                <a href="http://localhost:3000/Dashboard">Dashboard</a>
                <a href="http://localhost:3000/Attendance">Attendance</a>
                <a href="http://localhost:3000/Accolades">Accolades</a>
            </div>

            {/* Welcome message */}
            <h1>Welcome Employee, This is your homepage</h1>
        </div>
    );
}