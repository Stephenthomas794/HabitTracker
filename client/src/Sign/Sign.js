import React, {Component}  from 'react';
import './Sign.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class Sign extends Component {
    constructor() {
    super();
    this.state = {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.confirmPasswordMatch = this.confirmPasswordMatch.bind(this);
    }

handleEmailChange(event){
    this.setState({ email: event.target.value })
}

handleNameChange(event){
    this.setState({ name: event.target.value })

}

handlePasswordChange(event){
    this.setState({ password: event.target.value })
}

handleConfirmPasswordChange(event){
    this.setState({ confirmPassword: event.target.value })
}

confirmPasswordMatch(){
    if (this.state.password === this.state.confirmPassword){
        return true
    } else{
        return false
    }
}

handleFormSubmit(event){
    const checker = this.confirmPasswordMatch()
    if (checker === true){
        this.setState({ email: event.target.value })
        this.setState({ name: event.target.value })
        this.setState({ password: event.target.value })
        this.setState({ confirmPassword: event.target.value })
    
        const data = { email: this.state.email, name: this.state.name, password: this.state.password, confirmPassword: this.state.confirmPassword }
    
        fetch('http://127.0.0.1:5000/api/create', {
            crossDomain:true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            if (data.message === true) {
                window.alert('You Already Have An Account. Please Sign In');
            } else { 
                window.alert('Your Account Has Been Created. Please Sign In');
            }
            })
    }
    else{
        window.alert('The Passwords Do Not Match');
    }

}


render() {
return (

//const value = this.state.email
//const emailToSend = this.props.params.value 

    <div className="SignUp"> 
    <Form onSubmit={this.handleFormSubmit} >

<Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    required value = { this.state.email} 
    onChange={ this.handleEmailChange } />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" 
    required value = { this.state.name} 
    onChange={ this.handleNameChange }  />
  </Form.Group>

  <Form.Group controlId="SignUpBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" 
    required value = { this.state.password} 
    onChange={ this.handlePasswordChange } />
  </Form.Group>

    <Form.Group controlId="SignUpConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" 
    required value = { this.state.confirmPassword} 
    onChange={ this.handleConfirmPasswordChange } />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>        
    </div>
)}}

export default withRouter (Sign);
