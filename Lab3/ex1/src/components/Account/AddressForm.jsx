// src/components/Account/AddressForm.jsx
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AddressForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" placeholder="123 Main St" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City name" />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Select>
              <option>Viet Nam</option>
              <option>United States</option>
              <option>Japan</option>
              <option>France</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="700000" />
      </Form.Group>
    </Form>
  );
}
