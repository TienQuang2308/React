// src/components/pages/MoviePage.jsx
import React from "react";
import Filter from "../Movie/Filter";
import MovieCard from "../Movie/MovieCard";
import "../../data/movies"; // <-- Sửa lại đúng cấp thư mục
import { movies } from "../../data/movies";
import { Container } from "react-bootstrap";
import "./MoviePage.css";

export default function MoviePage() {
  return (
    <Container className="my-5">
        <Filter />

        <div className="text-center mt-4">
          <h4 className="fw-bold text-danger mb-3">🎥 Featured Movies</h4>
          <div className="movie-grid">
            {movies.slice(0, 3).map((movie) => (
              <MovieCard
                key={movie.id}
                img={movie.poster}
                title={movie.title}
                text={movie.description}
                genre={movie.genre}
              />
            ))}
          </div>
        </div>
      </Container>
  );
}
