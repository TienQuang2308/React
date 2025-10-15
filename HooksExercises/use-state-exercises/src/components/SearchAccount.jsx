import React, { useState } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

// Danh sách các account mẫu
const accounts = [
  {
    id: 1,
    username: 'alice',
    password: '123456',
    avatar: 'images/avatar.jpg',
  },
  {
    id: 2,
    username: 'bob',
    password: 'abcdef',
    avatar: 'images/avatar2.jpg',
  },
  {
    id: 3,
    username: 'charlie',
    password: 'pass123',
    avatar: 'images/avatar4.jpg',
  },
  {
    id: 4,
    username: 'david',
    password: 'qwerty',
    avatar: 'images/avatar5.jpg',
  },
];

function SearchAccount() {
  // State lưu giá trị người dùng nhập vào ô tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc danh sách accounts dựa theo username
  const filteredAccounts = accounts.filter((acc) =>
    acc.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h3 className="text-center text-primary mb-4">Tìm kiếm tài khoản</h3>

      {/* Ô nhập để tìm kiếm */}
      <Form.Control
        type="text"
        placeholder="Nhập username cần tìm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {/* Hiển thị danh sách kết quả */}
      <Row>
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map((acc) => (
            <Col md={3} sm={6} xs={12} key={acc.id} className="mb-4">
              <Card className="shadow-sm text-center">
                <Card.Img
                  variant="top"
                  src={acc.avatar}
                  alt={acc.username}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {acc.username}
                  </Card.Title>
                  <Card.Text>Password: {acc.password}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          // Khi không có kết quả
          <p className="text-center text-muted">Không tìm thấy kết quả</p>
        )}
      </Row>
    </Container>
  );
}

export default SearchAccount;
