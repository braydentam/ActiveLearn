import React,{ useState } from 'react';
import './send.css';
import axios from 'axios';

import {Button, ButtonToolbar} from 'react-bootstrap';
import AddQuestionModal from './addQuestionModal';

import {globalObject} from '../../App';

class Send extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            options: {ask: "", op1: "", op2: "", op3: "", op4: ""},
            student: this.props.student || false
        }
        console.log(this.state.options)
        this.myRef = React.createRef();
    }

    handleChange = ({ target }) => {
        
        const {name, value} = target;
        let options = this.state.options;
        options[name] = value;
        console.log(this.state.options)
        this.setState({
            options: options
        })
    };

    toggleShow = () => {
        let showing = !this.state.show;
        this.setState({
            show: showing
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let question = {"role":"teacher", "code":globalObject.room_code.toString(),"name":"Teacher","info":"question","value":JSON.stringify(this.state.options)} 
        console.log(question)
        globalObject.socket.send(JSON.stringify(question));
    };

    handleClick = () =>{
        
    }

    render = () => {
        return (
            <>
                <div className = "send">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="question"
                            value={this.state.options.ask || ''}
                            name="ask"
                            type="text"
                            placeholder="Enter Question..."
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op1 || ''}
                            className="op1"
                            name="op1"
                            type="text"
                            placeholder="Option 1"
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op2 || ''}
                            className="op2"
                            name="op2"
                            type="text"
                            placeholder="Option 2"
                            onChange = {this.handleChange}
                        /><br/>
        
                        <input
                            value={this.state.options.op3 || ''}
                            className="op3"
                            name="op3"
                            type="text"
                            placeholder="Option 3"
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op4 || ''}
                            className = "op4"
                            name="op4"
                            type="text"
                            placeholder="Option 4"
                            onChange = {this.handleChange}
                        /><br/>
                        <button className = "sub" onClick={this.handleClick} type="submit">Submit</button>
                    </form>
                    <div>
                        <AddQuestionModal className = "mod"show={false} options={this.state.options} onClick={this.toggleShow}/>
                    </div>
                </div>
            </>
        );
    }
    
}

export default Send;


