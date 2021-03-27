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