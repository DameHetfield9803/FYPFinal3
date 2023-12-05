import React from 'react';
import './Dashboard.css'; // Import the CSS for your Dashboard component
import { Link } from 'react-router-dom';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Dashboard() {
    const history = useHistory();

    const logout = async () => {
        try {
          await signOut(auth);
          history.push("/");
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <div>
            
            {/* NAVBAR ITEMS */}  
      <div className="topnav">
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </a>
            
                <a href="/Dashboard">Dashboard</a>
                <a href="/Attendance">Attendance</a>
                <a href="/Accolades">Accolades</a>
                <a href="/AppraisalForm">AppraisalForm</a>

                
         {/* My Profile link */}  
         <a href="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
        
        <span>My Profile</span>
        </a>

            </div>
            {/*END OF NAVBAR ITEMS */} 

            <div id="dashboard" className="mb-2">
                <h1>Dashboard</h1>
                <button onClick={logout}>LOGOUT</button>
                <p>Charts (updated monthly)</p>
            </div>
        </div>
    );
}