import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Col,
    FormControl,
    Button,
    Checkbox,
    ControlLabel
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
        this.onSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        let isStatusOK = false;
        e.preventDefault();
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                username:  this.state.username,
                password:  this.state.password
            })
        }).then(resp => {
            if(resp.status===200){
                isStatusOK = true;
            }
            return resp.json()}) // Transform the data into json
            .then(
                json => {console.log(json);
                this.setState({redirect: isStatusOK});})
            .catch(error => console.error(error));

        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({redirect: false});
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        if(this.state.redirect===true){
            return <Redirect to={"/"} />
        }
        return (
            <div>
                <Form horizontal  onSubmit={this.onSubmit}>
                    <FormGroup controlId="username">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Username" value={this.state.username}
                                         onChange={this.handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="password">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password"  value={this.state.password}
                                         onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Login</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;