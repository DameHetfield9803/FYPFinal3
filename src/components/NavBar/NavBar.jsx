import Dashboard from "../Dashboard/Dashboard";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import Home from "../Home/Home";
import PeerEvaluation from "../PeerEvaluation/PeerEvaluation";
import SelfEvaluation from "../SelfEvaluation/SelfEvaluation";
import Attendance from "../Attendance/Attendance";
import SupervisorFeedback from "../SupervisorFeedback/SupervisorFeedback";
import Accolades from "../Accolades/Accolades";
import AppraisalForm from "../AppraisalForm/AppraisalForm";
import Profile from "../Profile/ProfileSettings";
import AppraisalItem from "../AppraisalItem/AppraisalItem";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function navbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Home
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to={Home}>{ }</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}