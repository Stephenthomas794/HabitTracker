import React, { Component } from 'react';
import './Add.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

class Add extends Component {
    constructor() {
    super();
    this.state = {
        nameOfHabit:  undefined,
        timesPerDay: undefined

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameOfHabit = this.handleNameOfHabit.bind(this);
    this.handleTimesPerDay = this.handleTimesPerDay.bind(this);
    }

    handleFormSubmit(event){
        console.log("Submit Form");
    }

    handleNameOfHabit(event){
    this.setState({ nameOfHabit: event.target.value })

    }

    handleTimesPerDay(event){
    this.setState({ timesPerDay: event.target.value })

    }

    render() {

    return (
    <div className= "Add">
    <header className="Add-header">
    <Form onSubmit={this.handleFormSubmit}>  
    <Table striped bordered hover variant="dark">
    <thead>
        <tr>
        <th>
            Enter Name of the Habit
        </th> 
        <th> 
            Select number of times a day the Habit would be done
        </th> 
        </tr>
    </thead>
    <tbody>
        <tr> 
        <td> 
            <Form.Group>                                                                                                 
                <Form.Control type="text" placeholder="Enter Name of the Habit" 
                required value = { this.state.nameOfHabit} 
                onChange={ this.handleNameOfHabit }  />  
            </Form.Group>
        </td>
        <td>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </Form.Control>
           </Form.Group>
        </td> 
        </tr> 
        <tr> 
        <td>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </td>
        </tr>
    </tbody>
    </Table>
    </Form>
    </header>
    </div>
    );
    }
    }

export default Add;

