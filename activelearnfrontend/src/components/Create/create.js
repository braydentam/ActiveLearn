import React from 'react';
import axios from 'axios';
import './create.css';
import {CreateLink} from './createElement';
import { globalObject } from "../../App"


class CreateP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
            name: "",
            pdf: "",
        }
        this.myRef = React.createRef();
    }
// eslint-disable-next-line
    createRoom = async () => {
        let room_code = await axios({
            method: 'post',
            url: "https://ec2-54-241-187-155.us-west-1.compute.amazonaws.com/code/create-room",
        })

        console.log(room_code.data.code)
        this.room_code = room_code.data.code; 
        globalObject.room_code = room_code.data.code;
        globalObject.name = document.getElementById("teacher_name");
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
      let file = document.querySelector('#filesubmit').files[0];

          this.convertBase64(file).then(
            data => {
              let pdf = {"role" : "teacher", "code": "abc", "name" : this.state.name, "info" : "msg", "value" : data} 
              this.socket.send(JSON.stringify(pdf))
            }
          );
    }
  


    render = () => {
        return (
            <>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">
                {/* eslint-disable-next-line */}
                {/* <a class="name" download="ididntask" href="" title='Download pdf document' id="download"> askjdksajdkjak</a> */}
                <h1>Create an ActiveLearn Room</h1>
                <input id="teacher_name" class = "name" placeholder="Name:" ref={this.myRef}></input>
                <br></br>
                {/* <input type="file" name="file" id="filesubmit" class="inputfile"/>
                <label for="filesubmit">Choose a file</label>
                <br></br> */}
                <CreateLink to="/teacher">
                <button id="join" class="join" onClick={this.createRoom}>Create Room</button>
                </CreateLink>
                
                </div>
            </>
        )
    }
}

export default CreateP;
