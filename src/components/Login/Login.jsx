import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const history = useHistory();

    function loginAction() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    history.push("/dashboard")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg("Error! Failed to authenticate credentials. ");
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                history.push("/dashboard")
            }
        });
    }, []);

    return (
        <>
            <div className="container mt-5">
                <img src="/Assets/TSH.jpg" width="310px" height="90px" href="/" />
                <br />
                <h1 className="mb-2">Login</h1>
                <label>Email</label>
                <input className="form-control mb-3" name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="form-control mb-3" name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-primary" style={{ marginRight: "10px" }}
                    onClick={loginAction}
                >Submit</button>
                <Link to="/forgetpassword">
                    Forget password
                </Link>
                {errorMsg &&
                    <div className="alert bg-danger text-white mt-3 p-2">
                        <i className="fas fa-triangle-exclamation mx-2"></i>
                        {errorMsg}
                    </div>
                }
            </div >
        </>
    );
}