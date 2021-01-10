import React, { Component } from 'react';
import Sign from '../Sign/Sign';
import Auth from '../Auth/Auth';
import Space from '../Space/Space';

import SignIn from '../SignIn/SignIn';
import Table from 'react-bootstrap/Table';

class HomePage extends Component { 
    constructor() {
    super();
    this.state = {
            email: undefined,
            name: undefined,
            password: undefined,
            confirmPassword: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setEmail = this.setEmail.bind(this)
        this.setEmailObj = this.setEmailObj.bind(this);
    }

handleSubmit(email, name, password, confirmPassword){
    this.setState({
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword
    })
}

setEmailObj(obj){
    this.setState({
        email: obj
    })
    this.props.setEmail(this.state.email)
}

setEmail(newEmail){
    this.setState({
       email:newEmail
    })
    this.props.setEmail(this.state.email)
}
    render() {
    return (
        <div className="HomePage">
        <header className="HomePage-header">
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>
                    Sign In
                </th>
                <th>
                    Sign Up
                </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>
                    <SignIn setEmail = {this.setEmail} />
                    <Space />
                    <Auth setEmail = {this.setEmail} />
                </td>
                <td>
                    <Sign handle={this.handleSubmit} /> 
                </td>
                </tr>
            </tbody>
            </Table>
        </header>
        </div>
  );
}
}
export default HomePage;
