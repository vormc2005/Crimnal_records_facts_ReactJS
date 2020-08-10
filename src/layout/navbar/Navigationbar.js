import React, { Component } from 'react'
import './navigationbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export class Navigationbar extends Component {
    render() {
        return (
          <nav className= "container-fluid">
              <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Criminal Fact Checker</Navbar.Brand>
    <div className = "pull-right">
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" >Home</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">National</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">By State</NavDropdown.Item>         
        </NavDropdown>
    </Nav>
    </Navbar.Collapse>
      </div>
</Navbar>

          </nav>
        )
    }
}

export default Navigationbar


