import { Link } from "react-router-dom";
import "./HRHomepage.css";

export default function HRHomepage() {
  return (
    <>
      <h1 className="HR-homepage-h1">Human Resource Dashboard</h1>
      <div className="HR-homepage-container">
        <Link to="/Attendance" className="HR-homepage-link">Attendance</Link> <br></br>
        <Link to="/viewAccolades" className="HR-homepage-link">Accolades</Link>
        <br></br>
        <Link to="/AppraisalForm" className="HR-homepage-link">AppraisalForm</Link>
        <br></br>
        <Link to="/AppraisalItem" className="HR-homepage-link">AppraisalItem</Link>
        <br></br>
        <Link to="/Employee" className="HR-homepage-link">Employee</Link>
        <br></br>
        <Link to="/PeerEvaluation" className="HR-homepage-link">PeerEvaluation</Link>
        <br></br>
        <Link to="/SelfEvaluation" className="HR-homepage-link">SelfEvaluation</Link>
        <br></br>
        <Link to="/ReportForm" className="HR-homepage-link">ReportForm</Link>
        <br></br>
        <Link to="/ManagerFeedback" className="HR-homepage-link">ManagerFeedback</Link>
        <br></br>
        <Link href="/userguides" className="HR-homepage-link">UserGuide</Link>
        <br></br>
      </div>
    </>
  );
}
