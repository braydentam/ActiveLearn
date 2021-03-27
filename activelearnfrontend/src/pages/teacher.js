import React from "react";

import ToggleButtons from '../components/TaskBar Teacher/ToggleButtonsTeacher.js';
import StudentList from '../components/ParticipantList/ParticipantList.js';
import './teacher.css';
import SinglePagePDFViewer from "../components/pdf/single-page-teacher.js";

//import Test from "./components/pdf/test";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../sample.pdf";


export default function Teacher() {
  return (
    <>
    <div className="App">
      <div>
        <SinglePagePDFViewer pdf={samplePDF} className="Single-pg"/>
        <StudentList/>
      </div>
      <ToggleButtons className="task-bar-btns"/>
    </div>
    </>
  );
}