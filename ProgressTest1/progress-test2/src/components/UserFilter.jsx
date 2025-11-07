import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

const UserFilter = ({ filters, setFilters }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Tìm kiếm</Form.Label>
              <Form.Control
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                placeholder="Search username/full name"
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={filters.role}
                onChange={(e) =>
                  setFilters({ ...filters, role: e.target.value })
                }
              >
                <option value="">All</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
                <option value="locked">Locked</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Sắp xếp</Form.Label>
              <Form.Select
                value={filters.sort}
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value })
                }
              >
                <option value="username_asc">Username ↑</option>
                <option value="username_desc">Username ↓</option>
                <option value="fullname_asc">Fullname ↑</option>
                <option value="fullname_desc">Fullname ↓</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserFilter;
