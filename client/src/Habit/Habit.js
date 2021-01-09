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
//    this.handleLoad = this.handleLoad.bind(this)
//    this.handlePopulate = this.handlePopulate.bind(this)
//    this.handleAddTotal = this.handleAddTotal.bind(this)
    }

//Handle function on Page Load
componentDidMount(){
    this.setState({
        list: this.props.list
    })
}

componentDidUpdate(prevProps){
    if (this.props.list !== prevProps.list){
        this.setState({
            list: this.props.list
        })
    }
}

    render() {
    return (
    <div className="Habit">
    <header className="Habit-header">
    { this.state.list }
    </header>
    </div>
    
    );
    }
}

export default Habit;
