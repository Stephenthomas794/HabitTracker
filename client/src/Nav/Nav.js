import React from 'react';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const nav = (props) => {
    return (
    <div className="Nav">
<Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/">StephenTracker</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: { props.user }
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    </div>
)};

export default nav;
