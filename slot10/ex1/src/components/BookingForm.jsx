import React from "react";
import { Form, Alert } from "react-bootstrap";
import NameInput from "./NameInput";
import AddressInput from "./AddressInput";
import RouteSelect from "./RouteSelect";
import TripTypeSelect from "./TripTypeSelect";
import SubmitButton from "./SubmitButton";

export default function BookingForm() {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "30px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
      }}
    >
      {/* ⚠️ Alert nằm trên đầu form */}
      <Alert variant="warning" className="text-center">
        A simple warning alert — check it out!
      </Alert>

      <h3 className="text-center mb-4">Form đặt vé máy bay</h3>

      <Form>
        <NameInput />
        <AddressInput />
        <RouteSelect />
        <TripTypeSelect />
        <SubmitButton />
      </Form>
    </div>
  );
}
