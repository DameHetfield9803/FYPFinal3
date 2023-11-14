import { useEffect, useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from  "react-router-dom/cjs/react-router-dom.min";
import Forbidden from "../../pages/Forbidden";

const ProtectedRoute = ({component: Component}) => {

    const history = useHistory();

    const location  = useHistory();
    const authentication = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState();

    onAuthStateChanged(authentication, (user) => {
      
    if (user) {
      setIsLoggedIn(true);
      // Check if user's email has been whitelisted
    } 
    
    else {
      setIsLoggedIn(false);
      location.push("/forbidden");
    }

    });

    return (
      <>
        {isLoggedIn && (
          <Component />
        )}
      </>
    );
}
 
export default ProtectedRoute;
