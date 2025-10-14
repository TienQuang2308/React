import React from "react";
import { Carousel, Badge } from "react-bootstrap";
import { carouselMovies } from "../../data/carousel";
import "./HomeCarousel.css";

export default function HomeCarousel() {
  if (!Array.isArray(carouselMovies) || carouselMovies.length === 0) return null;

  return (
    <div className="cinema-carousel-wrapper">
      <Carousel
        fade
        interval={4000}
        controls={true}        
        indicators={false} 
        className="cinema-carousel"
      >
        {carouselMovies.map((m) => (
          <Carousel.Item key={m.id}>
            <div className="carousel-bg">
              <img
                className="carousel-img"
                src={m.poster}
                alt={m.title}
              />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="carousel-caption-custom text-start">
              <h2 className="carousel-title">
                🎞️ {m.title}
                <Badge bg="warning" text="dark" className="ms-2">
                  {m.genre}
                </Badge>
                <Badge bg="light" text="dark" className="ms-2">
                  {m.year}
                </Badge>
              </h2>
              <p className="carousel-desc">{m.description}</p>
              <button className="btn-watch-now">▶ Watch Trailer</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="cinema-light"></div>
    </div>
  );
}
