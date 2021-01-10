import React, {Component} from 'react';
import './Auth.css';
import GoogleButton from 'react-google-button';

class Auth extends Component {
   render() {
   return (
        <div className="LoginAuth">
            <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
            />

        </div> 
)}};

export default Auth;
