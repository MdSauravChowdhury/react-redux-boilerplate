import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";

class AddComponent extends Component {
    state = {
        name: "",
        age: "",
        email: "",
        message: "",
        image: null,
        completed: false,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, age, email, message, image, completed } = this.state;
        const lead = { name, age, email, message, image, completed };

        this.props.addLead(lead);

        this.setState({
            name: "",
            age: "",
            email: "",
            message: "",
            image: null,
            completed: false,
        });
    };

    render() {
        const { name, age, email, message, image, completed } = this.state;
        return (
            <div>
                <Form className="container">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Enter Name"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                name="age"
                                placeholder="Number"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            value={message}
                            name="message"
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                    <Form>
                        <Form.Group>
                            <Form.File
                                name="image"
                                value={image}
                                id="exampleFormControlFile1"
                                label="Example file input"
                            />
                        </Form.Group>
                    </Form>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            name="completed"
                            value={completed}
                            type="checkbox"
                            label="Check me out"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(null, { addLead })(AddComponent);
