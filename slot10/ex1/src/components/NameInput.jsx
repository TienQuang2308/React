import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function NameInput() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Họ tên</Form.Label>
      <InputGroup>
        <InputGroup.Text>👤</InputGroup.Text>
        <Form.Control type="text" placeholder="Nhập họ tên..." />
        <InputGroup.Text>vnd</InputGroup.Text>
      </InputGroup>
      <Form.Text className="text-muted">
        Phải nhập 5 ký tự, in hoa...
      </Form.Text>
    </Form.Group>
  );
}
