// src/components/Movie/Filter.jsx
import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function Filter() {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3 fw-bold text-primary">🎬 Movie Filter</Card.Title>

        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="Search by title or description..." />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Filter by Year</Form.Label>
                <Form.Select>
                  <option>All</option>
                  <option>≤ 2000</option>
                  <option>2001 - 2015</option>
                  <option>&gt; 2015</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Sorting</Form.Label>
                <Form.Select>
                  <option>Year ↑</option>
                  <option>Year ↓</option>
                  <option>Title A→Z</option>
                  <option>Title Z→A</option>
                  <option>Duration ↑</option>
                  <option>Duration ↓</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
