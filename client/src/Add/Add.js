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
        nameOfHabit:  '',
        timesPerDay: 1,
        list: undefined
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameOfHabit = this.handleNameOfHabit.bind(this);
    this.handleTimesPerDay = this.handleTimesPerDay.bind(this);
    this.handlePullData = this.handlePullData.bind(this);
    this.handlePopulate = this.handlePopulate.bind(this);
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

    handleAddTotal(event) {
    console.log(event.target.value);
    this.handleGetEntry(event.target.value) 
    }   

    handleGetEntry(index){
    const data = {"email" : this.props.email, "index" : index};
    console.log("data", data)
    fetch('http://127.0.0.1:5000/api/getEntry', {
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
        this.handlePullData();
    })
    }

    handlePullData(){
    const data = { "email": this.props.email }
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
        if (data.message !== false){
            console.log(data['nameOfHabit'].length);
            let len = data['nameOfHabit'].length;
            var list = []
            for (var i = 0; i < len; i++){
                list.push(this.handlePopulate(data, i))
            
            }
            this.setState({
                list: list
            })
            console.log("add", this.state.list)
            this.props.updateList(list)
        }
    })
}


    handleFormSubmit(event){
    event.preventDefault();

    const data = {email: this.props.email, nameOfHabit: this.state.nameOfHabit, timesPerDay: this.state.timesPerDay}
    console.log(data)
    fetch('http://127.0.0.1:5000/api/addEntry', {
        crossDomain: true,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
         console.log('Success:', data);
        })
        this.handlePullData()
    }
    
handlePopulate(data, i) {
    return (
    <Table striped bordered hover variant="dark" key={i}>
    <thead>
        <tr>
        <th>
    {data.nameOfHabit[i]}
     </th> 
        </tr>
    </thead>
    <tbody>
        <tr> 
        <td>  
    {data.timesPerDay[i]}
    </td>
        <td>
    {data.Total[i]}
    </td> 
        <td>
        <Button variant="primary" type="submit" value={i} onClick={event => this.handleAddTotal(event, "value")}>
            Add One
        </Button>   
        </td>
        </tr> 
    </tbody>
    </Table>
    )
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
                <Form.Control as="select" 
                required  value = { this.state.timesPerDay }
                onChange={ this.handleTimesPerDay }  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
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

