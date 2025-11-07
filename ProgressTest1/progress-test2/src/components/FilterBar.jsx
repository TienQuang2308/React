// src/components/FilterBar.jsx
import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { usePayment } from '../contexts/PaymentContext';

const FilterBar = () => {
  const { filters, setFilters, payments } = usePayment();

  // Lấy danh sách semester và course duy nhất để render dropdown
  const semesters = [...new Set(payments.map((p) => p.semester))];
  const courses = [...new Set(payments.map((p) => p.courseName))];

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header as="h5">Bộ lọc, Tìm kiếm & Sắp xếp</Card.Header>
      <Card.Body>
        <Form>
          <Row className="g-3">
            {/* Search */}
            <Col xs={12} lg={4}>
              <Form.Group>
                <Form.Label>Tìm kiếm (Semester/Course)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  value={filters.search}
                  onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                />
              </Form.Group>
            </Col>

            {/* Filter by Semester */}
            <Col xs={6} md={4} lg={2}>
              <Form.Group>
                <Form.Label>Lọc theo Semester</Form.Label>
                <Form.Select
                  value={filters.semester}
                  onChange={(e) => setFilters((prev) => ({ ...prev, semester: e.target.value }))}
                >
                  <option value="">All Semesters</option>
                  {semesters.map((sem) => (
                    <option key={sem} value={sem}>
                      {sem}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Filter by Course */}
            <Col xs={6} md={4} lg={2}>
              <Form.Group>
                <Form.Label>Lọc theo Course</Form.Label>
                <Form.Select
                  value={filters.course}
                  onChange={(e) => setFilters((prev) => ({ ...prev, course: e.target.value }))}
                >
                  <option value="">All Courses</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Sorting */}
            <Col xs={12} md={4} lg={4}>
              <Form.Group>
                <Form.Label>Sắp xếp theo:</Form.Label>
                <Form.Select
                  value={filters.sort}
                  onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
                >
                  <option value="course_asc">Course ↑</option>
                  <option value="course_desc">Course ↓</option>
                  <option value="date_asc">Date ↑</option>
                  <option value="date_desc">Date ↓</option>
                  <option value="amount_asc">Amount ↑</option>
                  <option value="amount_desc">Amount ↓</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterBar;
