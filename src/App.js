import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login/Login";
import Forbidden from "./pages/Forbidden";
import "./style.css";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Home from "./components/Home/Home";
import PeerEvaluation from "./components/PeerEvaluation/PeerEvaluation";
import SelfEvaluation from "./components/SelfEvaluation/SelfEvaluation";
import Attendance from "./components/Attendance/Attendance";
import SupervisorFeedback from "./components/SupervisorFeedback/SupervisorFeedback";
import Accolades from "./components/Accolades/Accolades";
import AppraisalForm from "./components/AppraisalForm/AppraisalForm";
import Profile from "./components/Profile/profilesettings";
import AppraisalItem from "./components/AppraisalItem/AppraisalItem";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>


          <Route exact path="/">
            <Login />
          </Route>


          <Route exact path="/dashboard">
            <ProtectedRoute component={Dashboard} />
          </Route>

          <Route exact path="/accolades">
            <ProtectedRoute component={Accolades} />
          </Route>

          <Route exact path="/forgetpassword">
            <ProtectedRoute component={ForgetPassword}  />
          </Route>

          <Route exact path="/home">
            <ProtectedRoute component={Home}  />
          </Route>

          <Route exact path="/appraisalitem">
            <ProtectedRoute component={AppraisalItem} />
          </Route>

          <Route exact path="/peerevaluation">
            <ProtectedRoute component={PeerEvaluation} />
          </Route>

          <Route exact path="/selfevaluation">
            <ProtectedRoute component={SelfEvaluation}  />
          </Route>

          <Route exact path="/attendance">
            <Attendance component={Attendance}/>
          </Route>

          <Route exact path="/supervisorfeedback">
            <ProtectedRoute component={SupervisorFeedback} />
          </Route>

          <Route exact path="/appraisalform">
            <ProtectedRoute component={AppraisalForm} />
          </Route>

          <Route exact path="/profile">
            <ProtectedRoute component={Profile} />
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
