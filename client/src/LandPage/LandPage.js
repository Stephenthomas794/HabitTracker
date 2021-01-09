import React, { Component } from 'react';
import Add from '../Add/Add';
import Habit from '../Habit/Habit';

class LandPage extends Component {
    constructor() {
    super();
    this.state = {
        email: undefined        
    }
        this.setEmail = this.setEmail.bind(this)
    }

    setEmail(newEmail){
        this.setState({
            email:newEmail
        })
        this.props.setEmail(this.state.email)
        console.log("LandPage", this.state.email)
    }

    render() { 
    return (
    <div className="Habit">
    <header className="Habit-header">
        <Add email = {this.props.email}/>
        <Habit email = {this.props.email} handleLoad= { this.props.handleLoad } /> 
    </header>
    </div>
    );
}
}
export default LandPage;
