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
            options: {},
            modal: false
        }
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

    handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(this.state.options));
      
    };

    addModelClose = () =>{
        this.setState({
            modal: false
        })
    }

    addModelShow = () =>{
        this.setState({
            modal: true
        })
    }

    handleClick = () =>{
        
    }

    render = () => {
        return (
            <>
                <div className = "send">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            value={this.state.options.ask || ''}
                            name="ask"
                            type="text"
                            placeholder="Enter Question..."
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op1 || ''}
                            name="op1"
                            type="text"
                            placeholder="Option 1"
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op2 || ''}
                            name="op2"
                            type="text"
                            placeholder="Option 2"
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op3 || ''}
                            name="op3"
                            type="text"
                            placeholder="Option 3"
                            onChange = {this.handleChange}
                        /><br/>
                        <input
                            value={this.state.options.op4 || ''}
                            name="op4"
                            type="text"
                            placeholder="Option 4"
                            onChange = {this.handleChange}
                        /><br/>
                        <button onClick={this.handleClick} type="submit">Submit</button>
                    </form>
                    <div>
                        <AddQuestionModal options={this.state.options}/>
                    </div>
                </div>
            </>
        );
    }
    
}

export default Send;


