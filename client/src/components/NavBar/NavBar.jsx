import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import "../../css/NavBar.css"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='navH'>
        <Navbar.Brand href="/" className='titu'>Prode Mundial</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/fasedegrupos">Grupos</Link>
            <Link to="/equipos">Equipos</Link>
          </Nav>
          <Nav>
            <Link to="/account">Cuenta</Link>
            <Link to="/createaccount">Nueva cuenta</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar