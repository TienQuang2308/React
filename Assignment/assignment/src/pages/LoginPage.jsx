import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    if (password.length < 6) {
      setError("Password must have at least 6 characters");
      return;
    }

    try {
      const res = await api.get(`/users?username=${username}&password=${password}`);

      if (res.data.length > 0) {
        login(res.data[0]);
        navigate("/home");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Login failed");
    }
  };

  return (
    <Card className="p-4 mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Login</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Card>
  );
}
