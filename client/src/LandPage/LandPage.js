import React, { Component } from 'react';
import Add from '../Add/Add';
import Habit from '../Habit/Habit';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class LandPage extends Component {
    constructor() {
    super();
    this.state = {
        email: undefined,       
        list: []
    }
        this.setEmail = this.setEmail.bind(this)
        this.updateList = this.updateList.bind(this)
        this.handleAddTotal = this.handleAddTotal.bind(this)
        this.handleGetEntry = this.handleGetEntry.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
        this.handlePopulate = this.handlePopulate.bind(this)
    }
    updateList(list){
        this.setState({
            list: list
        })
    }
    setEmail(newEmail){
        this.setState({
            email:newEmail
        })
        this.props.setEmail(this.state.email)
        console.log("LandPage", this.state.email)
    }

//Handle function on Page Load
componentDidMount(){
    return this.handleLoad()
}

handleAddTotal(event) {
    this.handleGetEntry(event.target.value) 
}

handleGetEntry(index){
    const data = {"email" : this.props.email, "index" : index};
    fetch(`${process.env.REACT_APP_API_PROXY}/api/getEntry`, {
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
        this.handleLoad();
})
}


handleLoad() {
    const data = { "email": this.props.email }
    fetch(`${process.env.REACT_APP_API_PROXY}/api/pullHabits`, {
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
            var len = data.['nameOfHabit'].length;
            var size = Object.keys(data['nameOfHabit']).length;
            var list = []
            for (var i = 0; i < len; i++){
                list.push(this.handlePopulate(data, i))
             }   
            this.setState({
                list: list
            })
            this.forceUpdate();
            }
    })
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
        <Button variant="primary"i value={i} type="submit" onClick={event => this.handleAddTotal(event, "value")}>
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
        <Add email = {this.props.email} list = { this.state.list } updateList= {this.updateList }/>
        <Habit email = {this.props.email} handleLoad= { this.handleLoad} list = { this.state.list } /> 
    </header>
    </div>
    );
}
}
export default LandPage;
