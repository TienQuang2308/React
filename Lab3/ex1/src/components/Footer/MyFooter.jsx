import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";

function MyFooter({ author, email, linkGithub }) {
  return (
    <footer className="cinema-footer text-center text-light py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="footer-title">🎬 Movie Management System</h2>
            <p className="footer-subtitle">
              Crafted with ❤️ by <strong>{author}</strong>
            </p>
            <p>
              Contact:{" "}
              <a href={`mailto:${email}`} className="footer-link">
                {email}
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} TraLTB. All rights reserved.
            </p>

            <Button
              variant="outline-light"
              href="https://github.com/TienQuang2308/React.git"
              className="footer-btn mt-3"
            >
              🚀 Visit GitHub: {linkGithub}
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
