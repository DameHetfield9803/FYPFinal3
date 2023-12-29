import Navbar from "../NavBar/NavBar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AppraisalForm.css";
import { Sections } from "./Sections";
import ManagerFeedback from "../ManagerFeedback/ManagerFeedback";
import SelfEvaluation from '../SelfEvaluation/SelfEvaluation'
import Accolades from "../Accolades/Accolades";
import PeerEvaluation from "../PeerEvaluation/PeerEvaluation";

export default function AppraisalForm() {
  return (
    <>
      <Sections/>
      <SelfEvaluation/>
      <PeerEvaluation/>
      <ManagerFeedback/>
      <Accolades/>
    </>
    



  
    )
  
}

