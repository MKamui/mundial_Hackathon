import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Prode Mundial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
          <Link to="/">Home</Link>
          </Nav.Link>
          <NavDropdown title="Instancias" id="basic-nav-dropdown">
            <NavDropdown.Item href="/fasedegrupos">Fase de Grupos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Octavos de Final
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cuartos de Final</NavDropdown.Item>
           
            <NavDropdown.Item href="#action/3.4">
              Semifinal
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Final
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Equipos" id="basic-nav-dropdown">
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar