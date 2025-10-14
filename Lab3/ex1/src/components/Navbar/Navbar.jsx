// src/components/NavBar/NavBar.jsx
import React from "react";
import { Navbar, Nav, Container, Form, Button, InputGroup, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-warning">
          🎞 MovieApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-light">Home</Nav.Link>
            <Nav.Link href="#about" className="text-light">About</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <InputGroup>
              <Form.Control type="text" placeholder="Quick search..." />
              <Button variant="outline-warning">Search</Button>
            </InputGroup>
          </Form>

          <div className="d-flex align-items-center gap-3">
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" size="sm">
                <i className="bi bi-person-circle me-1"></i> Accounts
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#profiles">Manage Your Profiles</Dropdown.Item>
                <Dropdown.Item href="#build">Build Your Account</Dropdown.Item>
                <Dropdown.Item href="#password">Change Password</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <i className="bi bi-heart-fill text-danger fs-5"></i>
            <i className="bi bi-box-arrow-in-right text-light fs-5"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
