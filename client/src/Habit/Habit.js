import React, { Component } from 'react';
import './Habit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Habit extends Component {
    constructor(props) {
    super();
    this.state = {
        email: undefined,
        list: undefined
    }
    this.handleLoad = this.handleLoad.bind(this)
    this.handlePopulate = this.handlePopulate.bind(this)
    }
//Handle function on Page Load
componentDidMount(){
    return this.handleLoad()
}

handleLoad() {
    const data = { "email": this.props.email }
    console.log("data", data)
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
        console.log(data['nameOfHabit'].length);
        console.log(data.nameOfHabit.[0])
        let len = data['nameOfHabit'].length;
        var list = []
        for (var i = 0; i < len; i++){
            list.push(this.handlePopulate(data, i))
            
        }
        this.setState({
            list: list
        })
    })
}

handlePopulate(data, i) {
    return (
    <Table striped bordered hover variant="dark">
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
        <Button variant="primary" type="submit">
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
    <div className="Habit">
    <header className="Habit-header">
    { this.state.list }
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
            TIMES PER DAY TABLE HERE    
        </td>
        <td>
            TOTAL HERE
        </td> 
        <td>
        <Button variant="primary" type="submit">
            Add One
        </Button>   
        </td>
        </tr> 
    </tbody>
    </Table>

    </header>
    </div>
    
    );
    }
}

export default Habit;
