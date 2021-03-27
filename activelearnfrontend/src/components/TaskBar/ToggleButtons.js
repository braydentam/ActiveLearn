import React, { Component } from 'react';
import "./ToggleButtons.css";
import {ToggleLink} from './toggleElement';
import {globalObject} from "../../App"

export class ToggleButtons extends Component {
    constructor(props){
        super(props)

        this.state = {
            tabType:'',
            room_code: "Code: "
        }
    }
    componentDidMount = () => {
        this.setState({
            room_code: "Code: " + globalObject.room_code
        })
    }
    toggleMe = (value) =>{
        this.setState({
            tabType:value
        })
    }
    
    render() {
        return (
            <div>
                <h2 id="code" class="code">{this.state.room_code}</h2>
            <div class="con">
                
                <div className="buttons">
                    <ToggleLink to="/dashboard">
                    <button className="btn-question" onClick={()=>this.toggleMe('question')}>Ask a Question  </button>
                    </ToggleLink>
                    <ToggleLink to= "/">
                    <button className="btn-leave" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                    </ToggleLink>
                        <input type="file" name="file" id="filesubmit" class="inputfile"/>
                    <label for="filesubmit">Choose a file</label>
                    <br></br>
                </div>
                <div>
                    {
                        this.state.tabType === 'question' && <div> Question</div>
                        //CHANGE CODE TO DO WHATEVER ON SOCKET
                    }

                    {
                        this.state.tabType === 'leave' && <div> Leave </div>
                        //CHANGE CODE TO DO WHATEVER ON SOCKET
                    }
                </div>
            </div>
            </div>
        );
    }
}

export default ToggleButtons