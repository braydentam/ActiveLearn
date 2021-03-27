import React from "react";

import ToggleButtons from '../components/TaskBar copy/ToggleButtons.js';

import './teacher.css';
import SinglePagePDFViewer from "../components/pdf copy/single-page.js";

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