// CSS
import './App.css';

//REACT
import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

//COMPONENTS
import Nav from './Nav/Nav';
import HomePage from './HomePage/HomePage';
import LandPage from './LandPage/LandPage';
import Error from './Error/Error';

class App extends Component {
    constructor() {
    super();
    this.state = { 
            email: undefined,
            name: undefined,
            password: undefined,
            confirmPassword: undefined
        }
        this.setEmail = this.setEmail.bind(this)
    }

setEmail(email){
    this.setState({
        email: email
    })
}

render() {
  return (
  <main>
    <div className="App">
    <Nav email={this.state.email}/>
    <header className="App-header">

        <Switch> 
            <Route path="/" component={(routeProps)=> <HomePage setEmail={this.setEmail} {...routeProps} /> } exact/>
            <Route path="/email" component={(routeProps)=> <LandPage email={this.state.email} {...routeProps} /> } />
            <Route component= { Error } /> 
        </Switch>

    </header>
    </div>
    </main>
 );
}
}

export default App;
