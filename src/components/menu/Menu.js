
import React from "react";
import {Button, Navbar, Container, Nav, } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand >TODO</Navbar.Brand>
        <Nav className="me-auto">
         
           <Link to="/home"><Button>Home</Button></Link>
          <Link to="/about"><Button>About</Button></Link>
          <Link to="/contact"><Button>Contact</Button></Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
