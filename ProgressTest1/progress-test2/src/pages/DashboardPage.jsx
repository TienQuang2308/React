// src/pages/DashboardPage.jsx
import React from "react";
import { Container, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import NavigationHeader from "../components/NavigationHeader";
import FilterBar from "../components/FilterBar";

const DashboardPage = () => (
  <>
    <NavigationHeader />

    <Container>
      <FilterBar />

      <Card className="mb-4 shadow-sm">
        <Card.Header as="h5">Dashboard Overview</Card.Header>
        <Card.Body>
          {/* ✅ Tất cả route con như /home/users, /home/payments sẽ hiển thị tại đây */}
          <Outlet />
        </Card.Body>
      </Card>
    </Container>
  </>
);

export default DashboardPage;
