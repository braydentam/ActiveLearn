import React from 'react';
import './join.css';
import {StudentLink} from './studentElement';
const Join = () => {
    return (
        <>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">
            <h1>Join an ActiveLearn Room</h1>
            <input class = "name" placeholder="Name:"></input>
            <br></br>
            <input class = "room" placeholder="Room Code:"></input>
            <br></br>
            <StudentLink to="/student">
            <button class = "join">Join Room</button>
            </StudentLink>
            </div>
        </>
    )
}

export default Join;
