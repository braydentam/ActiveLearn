import React, { Component } from 'react';
import "./ToggleButtonsTeacher.css";
import {ToggleLink} from './toggleElementTeacher';
import {globalObject} from "../../App"

export class ToggleButtons extends Component {
    constructor(props){
        super(props)

        this.state = {
            tabType:''
        }
    
    }

    convertBase64 = file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
  
    sendFile = () => {
    let file = document.getElementById('filesubmit').files[0];

        this.convertBase64(file).then(
            data => {
                let pdfmessage = {"role" : "teacher", "code": this.state.room_code.toString(), "name" : "Teacher", "info" : "file", "value" : data} 
                console.log(pdfmessage)
                globalObject.socket.send(JSON.stringify(pdfmessage))
            }
        );
    }

    componentDidMount = () => {
       setTimeout(() => {
        this.setState({
            room_code: globalObject.room_code,
        })
        }, 500)

        var fileInput = document.getElementById('filesubmit')

        globalObject.fileInput = fileInput;

        fileInput.addEventListener('change',  () => {
            if (fileInput.files.length !== 0) {
                this.sendFile()
            }
        }, false);
    }

    toggleMe = (value) =>{
        // function
        this.setState({
            tabType:value
        })
    }
    
    render() {
        return (
            <div>
                <div className="con-teacher">
                    <div className="buttons-teacher">
                        <ToggleLink to="/dashboard">
                            <button className="btn-question-teacher" onClick={()=>this.toggleMe('question')}>Ask a Question  </button>
                        </ToggleLink>
                        <a className = "Newpad" href={"/pad.html?room="+this.state.room_code} target="_blank">Collab notes</a>
                        <a className = "pad">
                        <input className = "file" type="file" name="activelearnfile" id="filesubmit" accept=".pdf"/>
                        </a>
                        <ToggleLink to= "/">
                            <button className="btn-leave-teacher" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                        </ToggleLink>
                        <div className="code">Code: {this.state.room_code}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleButtons