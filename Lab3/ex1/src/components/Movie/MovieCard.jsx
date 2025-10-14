import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function MovieCard({ img, title, text, genre }) {
  return (
    <Card style={{ width: "18rem" }} className="shadow-sm border-0 h-100">
      <Card.Img
        variant="top"
        src={img}
        alt={title + " poster"}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">
          {text.length > 80 ? text.slice(0, 80) + "..." : text}
        </Card.Text>
        <div className="mb-2">
          <strong>Genre:</strong> {genre}
        </div>
        <div className="mt-auto d-flex justify-content-between">
          <Button variant="primary" size="sm">
            Details
          </Button>
          <Button variant="outline-warning" size="sm">
            Add to Favourite
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
