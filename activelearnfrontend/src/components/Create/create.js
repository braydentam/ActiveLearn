import React from 'react';
import './create.css';

const CreateP = () => {
    return (
        <>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">
            <h1>Create an ActiveLearn Room</h1>
            <input class = "name" placeholder="Name:"></input>
            <br></br>
            <input type="file" name="file" id="file" class="inputfile"/>
            <label for="file">Choose a file</label>
            <br></br>
            <button class = "join">Create Room</button>
            </div>
        </>
    )
}

export default CreateP;
