// src/pages/DashboardPage.jsx
import React from "react";
import { Container, Card } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationHeader from "../components/NavigationHeader";
import FilterBar from "../components/FilterBar";
import PaymentTable from '../components/PaymentTable';
import AddPayment from './AddPayment';
import ViewPayment from './ViewPayment';

const DashboardPage = () => (
  <>
    <NavigationHeader />
    <Container>
      <FilterBar />
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h5">Dashboard Overview</Card.Header>
        <Card.Body>
          <Routes>
            <Route path="/" element={<PaymentTable />} />
            <Route path="payments" element={<PaymentTable />} />
            <Route path="payments/add" element={<AddPayment />} />
            <Route path="payments/:id" element={<ViewPayment />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Card.Body>
      </Card>
    </Container>
  </>
);

export default DashboardPage;
