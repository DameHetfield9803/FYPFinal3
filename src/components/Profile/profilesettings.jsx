import React from 'react';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './profilesettings.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from "src/components/Home/Home";

export default function ProfileSettings(){

  const history = useHistory();

  const logout = async () => {
      try {
        await signOut(auth);
        history.push("/");
      } catch (err) {
        console.log(err);
      }
  };

  return(
    <Navbar className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href={Home}>Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
}