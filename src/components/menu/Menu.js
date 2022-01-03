import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
export default function Menu() {
  return (
    <Navbar style={{ backgroundColor: "#6200ea" }} bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Naymax
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/home">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
          <Link to="/todo">
            <Button>Todo</Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
