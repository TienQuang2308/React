// src/components/Account/AboutForm.jsx
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AboutForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" isInvalid />
            <Form.Control.Feedback type="invalid">Required field</Form.Control.Feedback>
          </Form.Group>
        </Col>
    
        <Col md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" isInvalid />
            <Form.Control.Feedback type="invalid">Required field</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" isInvalid />
            <Form.Control.Feedback type="invalid">Invalid email</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="0123 456 789" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter age" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}
