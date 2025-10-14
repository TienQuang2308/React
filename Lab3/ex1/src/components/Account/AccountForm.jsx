// src/components/Account/AccountForm.jsx
import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function AccountForm() {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-person"></i>
        </InputGroup.Text>
        <Form.Control placeholder="Username" isInvalid />
        <Form.Control.Feedback type="invalid">Required field</Form.Control.Feedback>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-lock"></i>
        </InputGroup.Text>
        <Form.Control type="password" placeholder="Password" isInvalid />
        <Form.Control.Feedback type="invalid">Required field</Form.Control.Feedback>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-lock-fill"></i>
        </InputGroup.Text>
        <Form.Control type="password" placeholder="Confirm Password" isInvalid />
        <Form.Control.Feedback type="invalid">Passwords must match</Form.Control.Feedback>
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label>Secret Question</Form.Label>
        <Form.Control type="text" placeholder="Your favorite movie?" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Answer</Form.Label>
        <Form.Control type="text" placeholder="Enter your answer" />
      </Form.Group>
    </Form>
  );
}
