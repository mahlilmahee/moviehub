import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.ibb.co/F4hRcyv/Pngtree-wolf-head-logo-8188251.png"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' style={{marginLeft:'10px',color:'white'}}>Home</Link>
            <Link to='movies' style={{marginLeft:'20px', color:'white'}}>Latest</Link>
            <Link to='tvseries' style={{marginLeft:'10px' ,color:'white'}}>Latest Show</Link>
        
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Meme Web
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;