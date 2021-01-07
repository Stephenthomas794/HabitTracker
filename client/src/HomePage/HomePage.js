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
            user: undefined,
            email: undefined,
            name: undefined,
            password: undefined,
            confirmPassword: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(email, name, password, confirmPassword){
    this.setState({
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword
    })
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
                    <SignIn />
                    <Space />
                    <Auth />
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
