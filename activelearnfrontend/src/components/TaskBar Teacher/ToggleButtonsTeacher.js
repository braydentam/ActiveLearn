import React, { Component } from 'react';
import "./ToggleButtonsTeacher.css";
import {ToggleLink} from './toggleElementTeacher';

export class ToggleButtons extends Component {
    constructor(props){
        super(props)

        this.state = {
            tabType:''
        }
    
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
                        <ToggleLink to= "/">
                            <button className="btn-leave-teacher" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                        </ToggleLink>
                        <span className="code">Code: abcd</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleButtons