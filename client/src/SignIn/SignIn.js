import React, { Component } from 'react';
import './SignIn.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
    constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

handleEmailChange(event){
    this.setState({ email: event.target.value })
}

handlePasswordChange(event){
    this.setState({ password: event.target.value })
}

handleFormSubmit(event){
    event.preventDefault();
    
    this.setState({ email: event.target.value })
    this.setState({ password: event.target.value })
    const data = { email: this.state.email, password: this.state.password }
    console.log(data);
    fetch('http://127.0.0.1:5000/api/signIn', {
        crossDomain: true,
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success', data);
        if (data.message === true){ 
            window.alert("You do not have an account");
        } else if (data.message === false){
            window.alert("The password you entered does not match what we have on file");
        } else{
        this.props.history.push('/email');
        }
        })
    }

    render() {
    
    return (
    
    <div className= 'SignIn'>
    <Form onSubmit={this.handleFormSubmit}> 
    
    <Form.Group controlId="BasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value = { this.state.email} onChange={ this.handleEmailChange } />
    </Form.Group>

    <Form.Group controlId="BasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value = { this.state.password} onChange={ this.handlePasswordChange } />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>

  </Form>
  </div>
)}}

export default withRouter ( SignIn);
