import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza-napoletana-verace.jpg"
          alt="Pizza"
          height="500"
        />
        <Carousel.Caption>
          <h3>Neapolitan Pizza</h3>
          <p>If you are looking for traditional Italian pizza, this is the best choice!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="PIZZA-MARGHERITA.jpg"
          alt="Pizza Margherita"
          height="500"
        />
        <Carousel.Caption>
          <h3>Margherita Pizza</h3>
          <p>Classic taste with fresh mozzarella, basil, and tomato sauce.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hawaiian.jpg"
          alt="Pizza Hawaiian"
          height="500"
        />
        <Carousel.Caption>
          <h3>Hawaiian Pizza</h3>
          <p>Sweet and savory combo with pineapple and ham.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="mushroom.jpg"
          alt="Pizza Mushroom"
          height="500"
        />
        <Carousel.Caption>
          <h3>Mushroom Pizza</h3>
          <p>A rich flavor with fresh mushrooms and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
