// src/components/Movie/MovieCard.jsx
import React from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import movies from "../../data/movies";

export default function MovieCard() {
  return (
    <div className="mt-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={movie.poster}
                alt={`${movie.title} poster`}
                style={{ height: "320px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="text-muted">
                  {movie.description.length > 80
                    ? movie.description.slice(0, 80) + "..."
                    : movie.description}
                </Card.Text>
                <p className="mb-1">
                  <strong>Year:</strong> {movie.year}
                </p>
                <p className="mb-1">
                  <strong>Country:</strong> {movie.country}
                </p>
                <p className="mb-1">
                  <strong>Duration:</strong> {movie.duration} mins
                </p>
                <Badge bg="primary">{movie.genre}</Badge>
              </Card.Body>
              <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                <Button variant="outline-success" size="sm">
                  Add to Favourites
                </Button>
                <Button variant="outline-info" size="sm">
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
