import ReactPlayer from 'react-player';

export default function UserGuides() {
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
            {/*Start Of Embedded Video Items */}
            <h2> User Guide</h2>
            <p>Video Guide Example</p>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=lHpYyYtkmrw"
                controls
                width="400"
                height="400"
            />
            <ReactPlayer
                url="https://www.youtube.com/watch?v=lHpYyYtkmrw"
                controls
                width="200"
                height="200"
            />
            {/*End Of Embedded Video Items */}

        </div>

    );
}
