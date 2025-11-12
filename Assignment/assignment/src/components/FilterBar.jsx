import React, { useContext, useMemo } from "react";
import { Card, Form } from "react-bootstrap";
import { ExpenseContext } from "../context/ExpenseContext";
import { AuthContext } from "../context/AuthContext";

export default function FilterBar({ filter, setFilter }) {
  const { expenses } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);

  // ✅ Lấy danh sách category duy nhất từ expense của user hiện tại
  const categories = useMemo(() => {
    const userExpenses = expenses.filter(
      (e) => String(e.userId) === String(user?.id)
    );
    const unique = [...new Set(userExpenses.map((e) => e.category))];
    return unique;
  }, [expenses, user]);

  return (
    <Card className="p-3 mb-3 shadow-sm">
      <h5 className="mb-2">Filter by Category</h5>
      <Form.Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </Form.Select>
    </Card>
  );
}
