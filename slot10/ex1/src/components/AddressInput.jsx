import React from "react";
import { Form } from "react-bootstrap";

export default function AddressInput() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Địa chỉ</Form.Label>
      <Form.Control type="text" placeholder="Nhập địa chỉ..." />
      <Form.Text className="text-muted">
        Phải nhập 5 ký tự, in hoa...
      </Form.Text>
    </Form.Group>
  );
}
