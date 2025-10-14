// src/components/Account/AccountPage.jsx
import React, { useState } from "react";
import { Container, Card, Button, ProgressBar } from "react-bootstrap";
import AboutForm from "./AboutForm";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AccountPage() {
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const progress = step === 1 ? 33 : step === 2 ? 67 : 100;

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-lg">
        <h3 className="mb-4 text-center text-primary">
          <i className="bi bi-person-circle me-2"></i>Build Your Profile
        </h3>

        <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />

        {step === 1 && <AboutForm />}
        {step === 2 && <AccountForm />}
        {step === 3 && <AddressForm />}

        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" disabled={step === 1} onClick={prev}>
            Previous
          </Button>
          {step < 3 ? (
            <Button variant="primary" onClick={next}>
              Next
            </Button>
          ) : (
            <Button variant="success">Finish</Button>
          )}
        </div>
      </Card>
    </Container>
  );
}
