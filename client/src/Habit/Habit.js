import React, { Component } from 'react';
import './Habit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Habit extends Component {
    constructor() {
    super();
    this.state = {
        email: ''
    }

    }
handleOnLoad(){
    this.setState({ email: event.target.value })
    const data = { email: this.state.email }
    fetch('http://127.0.0.1:5000/api/pullHabits', {
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
    })
}

    render() {
    return (
    <div className="Habit">
    <header className="Habit-header">
    <Table striped bordered hover variant="dark">
    <thead>
        <tr>
        <th>
            LINK HERE
        </th> 
        </tr>
    </thead>
    <tbody>
        <tr> 
        <td> 
            TABLE HERE    
        </td>
        <td>
            NUMBER HERE
        </td> 
        <td>
        <Button variant="primary" type="submit">
            Add One
        </Button>   
        </td>
        </tr> 
    </tbody>
    </Table>

    </tbody>
    </header>
    </div>
    
    );
    }
}

export default Add;
