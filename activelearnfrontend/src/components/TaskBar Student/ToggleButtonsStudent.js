import React, { Component } from 'react';
import "./ToggleButtonsStudent.css";
import {ToggleLink} from './toggleElementStudent';
import {globalObject} from "../../App"

export class ToggleButtons extends Component {
    constructor(props){
        super(props)

        this.state = {
            tabType:''
        }
    
    }

    componentDidMount = () => {
        this.setState({
            room_code: globalObject.room_code
        })

        globalObject.socket = new WebSocket("ws://ec2-54-241-187-155.us-west-1.compute.amazonaws.com:8080/ws");
        let name = globalObject.name;
        let message = {"role" : "student", "code": globalObject.room_code.toString(), "name" : name, "info" : "join", "value" : ""}

        globalObject.socket.onopen = e => {
            console.log("[open] Connection established");
            console.log("Sending to server");
            console.log(message);
            globalObject.socket.send(JSON.stringify(message));
            // this.sendFile();
          };
          
          globalObject.socket.onmessage = event => {
            let json = JSON.parse(event.data)
            console.log(json)
            if (json.info === "pdf") {
              console.log("WE GOT THE PDF")
              document.getElementById("download").href = json.value
            }
          };
          
          globalObject.socket.onclose = event => {
            if (event.wasClean) {
              console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
              console.log('[close] Connection died');
            }
          };
          
          globalObject.socket.onerror = error => {
            console.log(`[error] ${error.message}`);
          };
    }

    toggleMe = (value) =>{
        this.setState({
            tabType:value
        })
    }
    
    render() {
        return (
            <div>
                <div className="con-student">
                    <div className="buttons-student">
                        <ToggleLink to="/dashboard">
                            <button className="btn-question-student" onClick={()=>this.toggleMe('question')}>Ask a Question  </button>
                        </ToggleLink>
                        <ToggleLink to= "/">
                            <button className="btn-leave-student" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                        </ToggleLink>
                        <span className="code">Code: {this.state.room_code}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleButtons