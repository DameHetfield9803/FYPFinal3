import React from 'react';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './profilesettings.css';

export default function ProfileSettings() {
  const history = useHistory();

  const logout = async () => {
    try {
      await signOut(auth);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Profile Settings</h1>
      {/* Include other JSX elements or components as needed */}
      <button onClick={logout}>Logout</button>
    </div>
  );
};
