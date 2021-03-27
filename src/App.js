import React from "react";

import ToggleButtons from './components/TaskBar/ToggleButtons';
import StudentList from './components/ParticipantList/ParticipantList';

import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
//import Test from "./components/pdf/test";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF} className="Single-pg"/>
      <StudentList/>
      <ToggleButtons className="task-bar-btns"/>
    </div>
  );
}