import './Accolades.css';

export default function Accolades() {
    return (
        <div>
            <div className="topnav">
                {/* Place the logo directly in the topnav and adjust the order */}
                <a href="http://localhost:3000/Home" className="logo-link">
                    <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
                </a>

                <a href="http://localhost:3000/Dashboard">Dashboard</a>
                <a href="http://localhost:3000/Attendance">Attendance</a>
                <a href="http://localhost:3000/Accolades">Accolades</a>
            </div>

            <h1>Accolades page
            </h1>
        </div>
    );
}