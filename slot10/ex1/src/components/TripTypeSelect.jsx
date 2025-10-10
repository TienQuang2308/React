import React from "react";
import { Form } from "react-bootstrap";

export default function TripTypeSelect() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
      <div>
        <Form.Check inline type="radio" label="Đi" name="tripType" />
        <Form.Check inline type="radio" label="Về" name="tripType" />
      </div>
    </Form.Group>
  );
}
