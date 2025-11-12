import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import api from "../services/api";
import { ExpenseContext } from "../context/ExpenseContext";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EditExpensePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  // Lấy dữ liệu expense cần sửa
  useEffect(() => {
    api.get(`/expenses/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category || Number(form.amount) <= 0) return;

    const updated = { ...form, userId: user.id };
    const res = await api.put(`/expenses/${id}`, updated);

    // Cập nhật trong context
    dispatch({ type: "EDIT", payload: res.data });

    navigate("/home"); // Quay lại trang Home
  };

  return (
    <>
      <Header />
      <Container className="mt-5" style={{ maxWidth: "500px" }}>
        <Card className="p-4 shadow-sm">
          <h4 className="text-center mb-3">Edit Expense</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => navigate("/home")}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </Form>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
