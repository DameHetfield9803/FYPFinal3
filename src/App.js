import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login/Login";
import Forbidden from "./pages/Forbidden";
import "./style.css";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import PeerEvaluation from "./components/PeerEvaluation/PeerEvaluation";
import SelfEvaluation from "./components/SelfEvaluation/SelfEvaluation";
import Attendance from "./components/Attendance/Attendance";
import ManagerFeedback from "./components/ManagerFeedback/ManagerFeedback";
import Accolades from "./components/Accolades/Accolades";
import AppraisalForm from "./components/AppraisalForm/AppraisalForm";
import Profile from "./components/Profile/profilesettings";
import AppraisalItem from "./components/AppraisalItem/AppraisalItem";
import ReportForm from "./components/ReportForm/reporterror";
import EmpTab from "./components/EmployeeTable/Employee";
import EmployeeDetails from "./components/EmployeeTable/EmployeeDetails";
import UserGuide from "./components/UserGuide/userguides";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
//Daniel testing below here 
// import AttendanceSummary from "./components/Attendance/Attendancesummary";
// En Quan testing below here
import MFtesting from "./components/ManagerFeedback/MFtesting";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/Home">
            <ProtectedRoute component={Home} />
          </Route>

          <Route exact path="/MFtesting">
            <ProtectedRoute component={MFtesting} />
          </Route>

          <Route exact path="/accolades">
            <ProtectedRoute component={Accolades} />
          </Route>

          <Route exact path="/forgetpassword">
            <ForgetPassword />
          </Route>

          <Route exact path="/appraisalitem">
            <ProtectedRoute component={AppraisalItem} />
          </Route>

          <Route exact path="/peerevaluation">
            <ProtectedRoute component={PeerEvaluation} />
          </Route>

          <Route exact path="/selfevaluation">
            <ProtectedRoute component={SelfEvaluation} />
          </Route>

          <Route exact path="/attendance">
            <Attendance component={Attendance} />
          </Route>

          <Route exact path="/managerfeedback">
            <ProtectedRoute component={ManagerFeedback} />
          </Route>

          <Route exact path="/appraisalform">
            <ProtectedRoute component={AppraisalForm} />
          </Route>

          <Route exact path="/profile">
            <ProtectedRoute component={Profile} />
          </Route>

          <Route exact path="/reportform">
            <ProtectedRoute component={ReportForm} />
          </Route>

          <Route exact path="/employee">
            <ProtectedRoute component={EmpTab} />
          </Route>

          {/* <Route exact path= "/Attendancesummary">
            <ProtectedRoute component={AttendanceSummary} />
          </Route> */}
          
          <Route exact path="/employee" component={EmpTab} />
          <Route exact path="/employee/:id" component={EmployeeDetails} />

          <Route exact path="/userguides">
            <ProtectedRoute component={UserGuide} />
          </Route>

          <Route exact path="/Navbar">
            <ProtectedRoute component={Navbar} />
          </Route>

          <Route exact path="/forbidden">
            <Forbidden />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
