import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function RouteSelect() {
  return (
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Đi từ</Form.Label>
        <Form.Select>
          <option>Hà Nội</option>
          <option>TP.HCM</option>
          <option>Đà Nẵng</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Đến</Form.Label>
        <Form.Select>
          <option>Hà Nội</option>
          <option>TP.HCM</option>
          <option>Đà Nẵng</option>
        </Form.Select>
      </Form.Group>
    </Row>
  );
}
