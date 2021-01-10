import React, {Component} from 'react';
import './Auth.css';
import GoogleButton from 'react-google-button';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { withRouter } from 'react-router-dom';

// refresh token
//import { refreshTokenSetup } from '../utils/refreshToken';


  const CLIENT_ID = '931153056282-750tm4j5ehreopjf5db02huk0v4gg3ac.apps.googleusercontent.com'; 

class Auth extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      email: undefined
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        email: response.profileObj.email
      }));
    }
    console.log(response.profileObj.email);
    const data = {email: response.profileObj.email}
    fetch('http://127.0.0.1:5000/api/google', {
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
        if (data.message === true){ 
            window.alert("Failed Creating your account ");
        } else{
        this.props.setEmail(this.state.email) 
        this.props.history.push('/email');
        }
        })
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      email: undefined
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
{ this.state.email ? <h5>Your Email is:  <br/><br/> { this.state.email } <br/><br/> Your password is: <br/><br/> google</h5> : null }
    </div>
    )
  }
}
export default withRouter (Auth);
