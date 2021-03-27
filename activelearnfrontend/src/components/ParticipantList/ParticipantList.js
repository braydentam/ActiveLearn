import React, { useState } from 'react';
import './participant.css';
import { globalObject } from "../../App"

class StudentList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            students: []
        } 
    }

    connectSocket = () => {
        globalObject.socket = new WebSocket("ws://ec2-54-241-187-155.us-west-1.compute.amazonaws.com:8080/ws");
        let name = globalObject.name
        let message = {"role" : "teacher", "code": globalObject.room_code.toString(), "name" : name, "info" : "msg", "join" : "created room"}

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
            } else if (json.info === "join") {
                this.addStudent(json.name)
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


    // eslint-disable-next-line
    addStudent = (student) => {
        let students = this.state.students;
        students.push(student)
        this.setState({
            students: students
        })
    };

    removeStudent = (targetIndex) => {
        let students = this.state.students;
        students.pop(targetIndex)
        this.setState({
            students: students
        }) 
    };

    componentDidMount() {
        setTimeout(() => {this.connectSocket();}, 500);
    }

    render = () => {
        return(
            <div>
                <div className="student-list">
                    <h1 className="par">Participant list</h1>
                    <ul>
                        {this.state.students.map((student, index) => (
                            <li onClick={() => this.removeStudent(index)} key={index}>
                                {student}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default StudentList;

