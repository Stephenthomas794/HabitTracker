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
    }

render() {
  return (
  <main>
    <div className="App">
    <Nav user={this.state.email}/>
    <header className="App-header">

        <Switch> 
            <Route path="/" component={ HomePage } exact/>
            <Route path="/email" component={ LandPage } />
            <Route component= { Error } /> 
        </Switch>

    </header>
    </div>
    </main>
 );
}
}

export default App;
