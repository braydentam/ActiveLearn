import React, { Component } from 'react';
import "./ToggleButtons.css";

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
                <div className="buttons">
                    <button className="btn-question" onClick={()=>this.toggleMe('question')}> Ask a Question </button>
                    <button className="btn-raise" onClick={()=>this.toggleMe('raise')}> Raise Hand </button>
                    <button className="btn-leave" onClick={()=>this.toggleMe('leave')}> Leave Room </button>
                </div>
                <div>
                    {
                        this.state.tabType === 'question' && <div> question</div>
                    }
                    {
                        this.state.tabType === 'raise' && <div> raise</div>
                    }
                    {
                        this.state.tabType === 'leave' && <div> leave </div>
                    }
                </div>
            </div>
        );
    }
}

export default ToggleButtons