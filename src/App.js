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
            <Accolades />
          </Route>

          <Route exact path="/forget-password">
            <ForgetPassword />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/peerevaluation">
            <PeerEvaluation />
          </Route>

          <Route exact path="/selfevaluation">
            <SelfEvaluation />
          </Route>

          <Route exact path="/attendance">
            <Attendance />
          </Route>

          <Route exact path="/supervisorfeedback">
            <SupervisorFeedback />
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
