import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function Menu() {
  const pizzas = [
    { id: 1, name: "Margherita Pizza", price: 24.0, oldPrice: 40.0, img: "PIZZA-MARGHERITA.jpg", tag: "SALE" },
    { id: 2, name: "Mushroom Pizza", price: 25.0, img: "mushroom.jpg" },
    { id: 3, name: "Hawaiian Pizza", price: 30.0, img: "hawaiian.jpg", tag: "NEW" },
    { id: 4, name: "Pesto Pizza", price: 35.0, oldPrice: 50.0, img: "pesto.jpg", tag: "SALE" },
  ];

  return (
    <div style={{ backgroundColor: "#333333", color: "white", padding: "50px 0" }}>
      <Container>
  <h2 className="text-center mb-4">Our Menu</h2>
  <Row>
    {pizzas.map((pizza) => (
      <Col md={3} key={pizza.id}>
        <Card className="mb-4 h-100 bg-light text-dark">
          <Card.Img variant="top" src={pizza.img} height="200" />
          <Card.Body className="d-flex flex-column">
            {pizza.tag && (
              <Badge
                bg={pizza.tag === "NEW" ? "info" : "warning"}
                className="mb-2"
              >
                {pizza.tag}
              </Badge>
            )}
            <Card.Title>{pizza.name}</Card.Title>
            {pizza.oldPrice ? (
              <Card.Text>
                <del>${pizza.oldPrice}</del>{" "}
                <span className="text-danger">${pizza.price}</span>
              </Card.Text>
            ) : (
              <Card.Text>${pizza.price}</Card.Text>
            )}
            {/* push button xuống cuối bằng mt-auto */}
            <Button variant="dark" className="mt-auto">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
    </div>
  );


}

export default Menu;
