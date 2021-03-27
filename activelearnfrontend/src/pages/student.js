import React from "react";

import ToggleButtons from '../components/TaskBar Student/ToggleButtonsStudent.js';

import './teacher.css';
import SinglePagePDFViewer from "../components/pdf Student/single-page-student.js";

//import Test from "./components/pdf/test";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../sample.pdf";


export default function Seacher() {
  return (
    <>
    <div className="App">
      <SinglePagePDFViewer pdf={samplePDF} className="Single-pg"/>
      <ToggleButtons className="task-bar-btns"/>
    </div>
    </>
  );
}