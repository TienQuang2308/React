// src/components/RegisterForm.jsx
import React, { useState } from "react";
import { Form, Button, Card, Container, Modal, Toast } from "react-bootstrap";

function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  // Validate từng trường
  const validateField = (name, value) => {
    let message = "";

    if (name === "username") {
      if (!/^[\w.]{3,}$/.test(value.trim())) {
        message = "Username ≥ 3 ký tự, chỉ gồm chữ, số, _ hoặc .";
      }
    } else if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        message = "Email không hợp lệ.";
      }
    } else if (name === "password") {
      if (
        !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}/.test(value)
      ) {
        message =
          "Password ≥ 8 ký tự, có chữ hoa, thường, số và ký tự đặc biệt.";
      }
    } else if (name === "confirm") {
      if (value !== form.password) {
        message = "Confirm password không khớp.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Hàm kiểm tra form hợp lệ (không thay đổi state → không re-render vô hạn)
  const isFormValid = () => {
    return (
      /^[\w.]{3,}$/.test(form.username) &&
      /\S+@\S+\.\S+/.test(form.email) &&
      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}/.test(form.password) &&
      form.password === form.confirm
    );
  };

  // Xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setShowToast(true);
      setShowModal(true);
    }
  };

  // Reset form
  const handleCancel = () => {
    setForm({ username: "", email: "", password: "", confirm: "" });
    setErrors({});
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <Card>
        <Card.Header>
          <h3 className="text-center">Register</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                value={form.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                isInvalid={!!errors.confirm}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirm}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button
                type="submit"
                disabled={!isFormValid()}
                variant="primary"
                className="w-50 me-2"
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-50"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Toast thông báo */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2000}
        autohide
        bg="success"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          color: "white",
        }}
      >
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast>

      {/* Modal hiển thị dữ liệu */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đăng ký</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <p><strong>Username:</strong> {form.username}</p>
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Password:</strong> {form.password}</p>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegisterForm;
