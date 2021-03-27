import React from 'react';
import axios from 'axios';
import './create.css';
import {CreateLink} from './createElement';


class CreateP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
            name: "",
            pdf: "",
        }
    }
// eslint-disable-next-line
    getRoom = async () => {
        let room_code = await axios({
            method: 'post',
            url: "http://ec2-54-241-187-155.us-west-1.compute.amazonaws.com:4001/code/create-room",
        })

        console.log(room_code.data.code)
        this.setState({code: room_code.data.code})
        this.joinRoom();

    }

    joinRoom = () => {
        this.socket = new WebSocket("ws://ec2-54-241-187-155.us-west-1.compute.amazonaws.com:8080/ws");
        let name = document.getElementById("namefield").value
        this.setState({name: name})
        let message = {"role" : "teacher", "code": "abc", "name" : name, "info" : "msg", "value" : "dfksjkfjdksjakfljLKDjfkljaskljfdjsklfjklj"}

        this.socket.onopen = e => {
            console.log("[open] Connection established");
            console.log("Sending to server");
            console.log(message);
            // this.socket.send(JSON.stringify(message));
            // this.sendFile();
          };
          
          this.socket.onmessage = event => {
            let json = JSON.parse(event.data)
            console.log(json)
            if (json.info === "pdf") {
              console.log("WE GOT THE PDF")
              document.getElementById("download").href = json.value
            }
          };
          
          this.socket.onclose = event => {
            if (event.wasClean) {
              console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
              console.log('[close] Connection died');
            }
          };
          
          this.socket.onerror = error => {
            console.log(`[error] ${error.message}`);
          };

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
                <a class="name" download="DOWNLAOADAKDD" href="" title='Download pdf document' id="download"> askjdksajdkjak</a>
                <h1>Create an ActiveLearn Room</h1>
                <input id="namefield" class = "name" placeholder="Name:"></input>
                <br></br>
                <input type="file" name="file" id="filesubmit" class="inputfile"/>
                <label for="filesubmit">Choose a file</label>
                <br></br>
                <CreateLink to="/teacher">
                <button class = "join" onClick={this.joinRoom}>Create Room</button>
                </CreateLink>
                
                </div>
            </>
        )
    }
}

export default CreateP;
