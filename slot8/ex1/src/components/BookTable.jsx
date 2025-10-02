import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function BookTable() {
  return (
    <div style={{ backgroundColor: "#333333", color: "white", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Book Your Table</h2>
        <Form>
          <div className="d-flex gap-2 mb-3">
            <Form.Control type="text" placeholder="Your Name *" className="bg-light text-dark" />
            <Form.Control type="email" placeholder="Your Email *" className="bg-light text-dark" />
            <Form.Select className="bg-light text-dark">
              <option>Select a Service</option>
              <option>Dine In</option>
              <option>Take Away</option>
              <option>Delivery</option>
            </Form.Select>
          </div>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={4} placeholder="Please write your comment" className="bg-light text-dark" />
          </Form.Group>
          <Button variant="warning">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
}

export default BookTable;
