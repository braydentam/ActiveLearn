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

    componentDidMount = () => {
       setTimeout(() => {
        this.setState({
            room_code: globalObject.room_code
        })
        }, 500)
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
                        <a className = "pad" href="/pad.html" target="_blank">Collab notes</a>
                        <a className = "pad">
                        <input className = "file" type="file" name="file" id="filesubmit"/>
                        </a>
                        <ToggleLink to= "/">
                            <button className="btn-leave-teacher" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                        </ToggleLink>
                        <span className="code">Code: {this.state.room_code}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleButtons