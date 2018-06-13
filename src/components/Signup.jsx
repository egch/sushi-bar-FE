import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Alert,
    Form,
    Col
} from "react-bootstrap";
import "./Signup.css";




export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            message: null,
            redirect: false
        };
        this.onSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        var isStatusOK = false;
        e.preventDefault();
        this.setState({message: 'sending data...'});
        fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),

            body: JSON.stringify({
                username:  this.state.username,
                email:  this.state.email,
                password:  this.state.password
            })
        }).then(resp => {
            if(resp.status===200){
                isStatusOK = true;
            }
            return resp.json()}) // Transform the data into json
          .then(json => {console.log(json);
                         this.setState({message: json.response, redirect: isStatusOK});})
          .catch(error => console.error(error));
        this.setState({username: ''});
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({confirmPassword: ''});
        this.setState({redirect: false});


    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        if(this.state.redirect===true){

            return <Redirect to={"/message/" + this.state.message} />
        }
        let display;
        if(this.state.message){
            display =  <FormGroup>
                <Col sm={6} smOffset={2}>
                    <Alert bsStyle="warning">
                        {this.state.message}
                    </Alert>
                </Col>
            </FormGroup>;
        }

        const signupForm = (<Form horizontal id="signup" onSubmit={this.onSubmit}>
            {display}
            <FormGroup controlId="email">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col  sm={6}>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId="username">
                <Col componentClass={ControlLabel} sm={2}>
                    Username
                </Col>
                <Col  sm={6}>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId="password">
                <Col componentClass={ControlLabel} sm={2} >
                    Password
                </Col>
                <Col  sm={6}>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId="confirmPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Confirm Password
                </Col>
                <Col  sm={6}>
                    <FormControl
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col sm={6} smOffset={2}>
                    <Button type="submit" disabled={!this.validateForm()}>Submit</Button>
                </Col>
            </FormGroup>
        </Form>);
        return (
            <div>
                {signupForm}
            </div>
        );
    }
}