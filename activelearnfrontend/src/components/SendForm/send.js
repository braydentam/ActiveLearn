// import React from 'react';
// import './send.css';

// connectSocket = () => {
//     this.socket = new WebSocket("ws://ec2-54-241-187-155.us-west-1.compute.amazonaws.com:8080/ws");
//     let name = document.getElementById("namefield") || {value: "Anonymous"};
//     name = name.value
//     console.log(name)
//     this.setState({name: name})
//     let message = {"role" : "teacher", "code": this.room_code.toString(), "name" : name, "info" : "msg", "value" : "dfksjkfjdksjakfljLKDjfkljaskljfdjsklfjklj"}

//     this.socket.onopen = e => {
//         console.log("[open] Connection established");
//         console.log("Sending to server");
//         console.log(message);
//         this.socket.send(JSON.stringify(message));
//         // this.sendFile();
//       };
      
//       this.socket.onmessage = event => {
//         let json = JSON.parse(event.data)
//         console.log(json)
//         if (json.info === "pdf") {
//           console.log("WE GOT THE PDF")
//           document.getElementById("download").href = json.value
//         }
//       };
      
//       this.socket.onclose = event => {
//         if (event.wasClean) {
//           console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//         } else {
//           console.log('[close] Connection died');
//         }
//       };
      
//       this.socket.onerror = error => {
//         console.log(`[error] ${error.message}`);
//       };

//       globalObject.socket = this.socket;
// }
// const Send = () => {
//     return (
//         <>
//         <div class = "send">
//             <form>
               
//                 <input class = "question" placeholder="Ask A Question..."></input> <br></br>
//                 <input class = "op1" placeholder="Option 1"></input><input class="check1" type="checkbox"></input> <br></br>
//                 <input class = "op2" placeholder="Option 2"></input><input class="check2" type="checkbox"></input> <br></br>
//                 <input class = "op3" placeholder="Option 3"></input><input class="check3" type="checkbox"></input> <br></br>
//                 <input class = "op4" placeholder="Option 4"></input><input class="check4" type="checkbox"></input> <br></br>
//                 <input class = "sub" type="submit" value="Submit"></input>
//             </form>
//         </div>
//         </>
//     )
// }

// export default Send;
