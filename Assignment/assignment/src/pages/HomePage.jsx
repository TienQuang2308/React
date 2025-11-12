import React, { useContext, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ExpenseContext } from "../context/ExpenseContext";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";

export default function HomePage() {
  const { expenses } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState("");

  // ✅ Lọc đúng các expense của user hiện tại
  const filtered = expenses.filter(
    (e) =>
      String(e.userId) === String(user?.id) &&
      e.category.toLowerCase().includes(filter.toLowerCase())
  );

  // ✅ Tính tổng chi tiêu (theo bộ lọc)
  const total = filtered.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main layout */}
      <Container className="mt-4">
        <Row>
          {/* Cột bên trái */}
          <Col md={4}>
            {/* Card tổng chi tiêu */}
            <Card className="p-3 mb-3 shadow-sm text-center">
              <h5 className="text-muted mb-1">Total Expenses</h5>
              <h3 className="fw-bold text-primary">
                {total.toLocaleString("vi-VN")} ₫
              </h3>
            </Card>

            {/* Form thêm chi tiêu */}
            <ExpenseForm />
          </Col>

          {/* Cột bên phải */}
          <Col md={8}>
            {/* Filter Bar */}
            <FilterBar filter={filter} setFilter={setFilter} />

            {/* Bảng Expense */}
            <Card className="p-3 shadow-sm">
              <h5 className="mb-3">Expense Management</h5>
              <ExpenseTable expenses={filtered} />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}
