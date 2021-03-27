import React from 'react';
import './join.css';
import {StudentLink} from './studentElement';
import {globalObject} from "../../App"


class Join extends React.Component {
    joinRoom = () => {
        globalObject.name = document.getElementById("student_name").value;
        globalObject.room_code = document.getElementById("room_code").value;
    }

    render = () => {
        return (
            <>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">
                <h1>Join an ActiveLearn Room</h1>
                <input class = "name" id="student_name" placeholder="Name:"></input>
                <br></br>
                <input class = "room" id="room_code" placeholder="Room Code:"></input>
                <br></br>
                <StudentLink to="/student">
                <button class = "join" onClick={this.joinRoom}>Join Room</button>
                </StudentLink>
                </div>
            </>
        )
    }
}

export default Join;
