import React, {Component, useState} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {globalObject} from "../../App";
import './modal.css';

class AddQuestionModal extends React.Component {
    constructor(props) {
        super(props)
        console.log("QUESTION MODAL")
        // this.props.options
        this.state = {
            show: true,
            options: this.props.options || {ask: "", op1: "", op2: "", op3: "", op4: ""},
            value: {},
            checked: "",
            student: this.props.student || false 
        }
        console.log("Show: Modal");
        console.log(this.state.show)
    }

    handleClose = () => {
        this.props.resetShow()
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true
        })
    };

    // sorter = (checkedItem) =>{
    //     this.setState({
    //         checked:checkedItem
    //     })
    // }
    onFormSubmit = (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target),
        formDataObj = Object.fromEntries(formData.entries())
        
        console.log(formDataObj)
        let message = {"role":"student", "code": globalObject.room_code,"name":globalObject.name,"info":"answer","value":JSON.stringify(formDataObj)}
        console.log(message);
        globalObject.socket.send(JSON.stringify(message))
    }
    render = () => {
        return (
        <>
            <Button className = "open" variant="primary" onClick={this.handleShow}>
                Student
            </Button>

            <Modal
            show={this.props.show && this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title> {this.props.options.ask} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Form onSubmit={this.onFormSubmit}>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="option 1"
                                    label={this.props.options.op1}
                                    // checked={this.state.checked==="option 1"}
                                    // onChange={function(){this.sorter("option 1")}}
                                />
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="option 2"
                                    label={this.props.options.op2}
                                    // checked={this.state.checked==="option 2"}
                                    // onChange={function(){this.sorter("option 2")}}
                                />
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="option 3"
                                    label={this.props.options.op3}
                                    // checked={this.state.checked==="option 3"}
                                    // onChange={function(){this.sorter("option 3")}}
                                />
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="option 4"
                                    label={this.props.options.op4}
                                    // checked={this.state.checked==="option 4"}
                                    // onChange={function(){this.sorter("option 4")}}
                                />
                                <Button variant="primary" type="submit" className='submit-btn' onClick={this.handleClose}>
                                    Submit
                                </Button>
                            </div>
                        ))}
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            </Modal>
        </>
        );
    }
};

export default AddQuestionModal;
