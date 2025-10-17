import React, { useReducer } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";

// --- Khởi tạo reducer ---
function formReducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
        errors: action.payload.trim() === ""
          ? { ...state.errors, username: "Username is required" }
          : (() => {
              const { username, ...rest } = state.errors;
              return rest;
            })(),
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        errors: action.payload.trim() === ""
          ? { ...state.errors, password: "Password is required" }
          : (() => {
              const { password, ...rest } = state.errors;
              return rest;
            })(),
      };

    case "VALIDATE_FORM":
      const newErrors = {};
      if (state.username.trim() === "") newErrors.username = "Username is required";
      if (state.password.trim() === "") newErrors.password = "Password is required";
      return {
        ...state,
        errors: newErrors,
        showModal: Object.keys(newErrors).length === 0, // mở modal nếu không có lỗi
      };

    case "RESET":
      return initialState;

    case "CLOSE_MODAL":
      return { ...state, showModal: false };

    default:
      return state;
  }
}

// --- Trạng thái ban đầu ---
const initialState = {
  username: "",
  password: "",
  errors: {},
  showModal: false,
};

function LoginForm({ onSubmit }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });
  };

  const handleCloseModal = () => dispatch({ type: "RESET" });

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Login</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {/* Username */}
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={state.username}
                    onChange={(e) =>
                      dispatch({ type: "SET_USERNAME", payload: e.target.value })
                    }
                    isInvalid={!!state.errors.username}
                    placeholder="Enter username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={state.password}
                    onChange={(e) =>
                      dispatch({ type: "SET_PASSWORD", payload: e.target.value })
                    }
                    isInvalid={!!state.errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal hiển thị khi đăng nhập thành công */}
      <Modal show={state.showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome, {state.username}!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default LoginForm;
