export default function NavBar() {
  return (
    <>
      {/* NAVBAR ITEMS */}
      <div className="topnav">
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="80px" />
        </a>
        <a href="/Attendance">Attendance</a>
        <a href="/Accolades">Accolades</a>
        <a href="/AppraisalForm">AppraisalForm</a>

        {/* My Profile link*/}
        <a href="/Profile" className="profile">
          <img
            src="Assets/Profile-icon.jpg"
            alt="Profile Icon"
            width="30px"
            height="30px"
          />

          <span>My Profile</span>
        </a>
      </div>
      {/*END OF NAVBAR ITEMS */}
    </>
  );
}
