import React, { Component } from 'react';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {
    constructor(props){
    super();
    this.state = {
    email: ''
    }

    }
    componentDidMount(){
    this.setState({
    email: this.props.email
    })
    }

    componentDidUpdate(preProps){
    if (this.props.email !== preProps.email){
        this.setState({
            email: this.props.email
        })
    }
    }

render(){

    return (
    <div className="Nav">
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/">StephenTracker</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: { this.props.email }
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    </div>
)}};

export default Nav;
