import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { ExpenseContext } from "../context/ExpenseContext";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

export default function ExpenseForm() {
  const { dispatch } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category || Number(form.amount) <= 0) return;

    const newExpense = { ...form, userId: user.id };
    const res = await api.post("/expenses", newExpense);
    dispatch({ type: "ADD", payload: res.data });
    setForm({ name: "", amount: "", category: "", date: "" });
  };
  return (
    <Card className="p-3 shadow-sm">
      <h5>Add Expense</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="number"
            placeholder="Amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            placeholder="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="w-100">
          Add Expense
        </Button>
      </Form>
    </Card>
  );
}
