import React, {Component, useState} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

class AddQuestionModal extends React.Component {
    constructor(props) {
        super(props)
        // this.props.options
        this.state = {
            show: false,
            options: {}
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true
        })
    };

    sendData = () => {

    }

    render = () => {
        return (
        <>
            <Button variant="danger" onClick={this.handleShow}>
                Open Question
            </Button>

            <Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title> Question </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="option 1"
                                />
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="option 2"
                                />
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="option 3"
                                />
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="option 4"
                                />
                                <Button variant="primary" type="submit" onClick={this.sendData}>
                                    Submit
                                </Button>
                            </div>
                        ))}
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }
};

export default AddQuestionModal;
