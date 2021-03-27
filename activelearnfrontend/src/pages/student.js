import React from "react";

import ToggleButtons from '../components/TaskBar Student/ToggleButtonsStudent.js';
import {globalObject} from "../App"
import './teacher.css';
import SinglePagePDFViewer from "../components/pdf Student/single-page-student.js";
import AddQuestionModal from "../components/SendForm/addQuestionModal.js";

//import Test from "./components/pdf/test";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../sample.pdf";


class Seacher extends React.Component {
  constructor(props) {
    super(props)
    console.log("STUDETKJKE")
    this.state = {
      options: {},
      show_question: false
    }
  }

  componentDidMount = () => {
    console.log("MOUNTED QUESTION MODAL")
    setTimeout(() => { 
        globalObject.socket.addEventListener("message", (event) =>{
        let json = JSON.parse(event.data)
        console.log(json)
        if (json.info === "question") {
          console.log(JSON.parse(json.value))
            this.setState({
                show_question: true,
                options: JSON.parse(json.value),
            }) 

            console.log(this.state.options)
        }
      })
    }, 500)
}

  render = () => {
    return (
      <>
      <div className="App">
        <AddQuestionModal show={this.state.show_question} student={true} options={this.state.options}/>
        <SinglePagePDFViewer pdf={samplePDF} className="Single-pg"/>
        <ToggleButtons className="task-bar-btns"/>
      </div>c
      </>
    );
  }
}

export default Seacher;