import React, { Component } from 'react';
import "./ToggleButtons.css";
import {ToggleLink} from './toggleElement';

export class ToggleButtons extends Component {
    constructor(props){
        super(props)

        this.state = {
            tabType:''
        }
    
    }

    toggleMe = (value) =>{
        this.setState({
            tabType:value
        })
    }
    
    render() {
        return (
            <div>
                <h2 class="code">Code: abcd</h2>
            <div class="con">
                
                <div className="buttons">
                    
                    <ToggleLink to= "/">
                    <button className="btn-leave" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                    </ToggleLink>
                </div>
                <div>
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