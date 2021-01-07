import React from 'react';
import './Auth.css';
import GoogleButton from 'react-google-button';

const auth = () => {
    return (
        <div className="LoginAuth">
            <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
            />

        </div> 
)};

export default auth;
