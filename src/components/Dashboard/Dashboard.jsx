//import 'bootstrap/dist/css/bootstrap.css';
//import Chart from "react-apexcharts";
import { auth } from "../../config/firebase";
import { useParams } from "react-router-dom";
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

    const { id } = useParams();
    // For dashboard ID checking // To be implemented
    return (
        <>
            <div id="dashboard" className="mb-2">
                <h1>Dashboard {id}</h1>
                <button onClick={logout}>LOGOUT</button>
                <p>Charts (updated monthly)</p>
            </div>
        </>
    )
}