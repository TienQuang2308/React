import React from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { usePayment } from '../contexts/PaymentContext';

const PaymentTable = () => {
  const {
    filteredPayments,
    loading,
    handleDelete,
  } = usePayment();

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Đang tải dữ liệu thanh toán...</p>
      </div>
    );
  }

  if (!filteredPayments || filteredPayments.length === 0) {
    return (
      <div className="text-center py-4">
        <p>Không có dữ liệu thanh toán nào được tìm thấy.</p>
        <Button onClick={() => navigate('/home/payments/add')} variant="primary">
          + Thêm thanh toán mới
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Danh sách Thanh toán</h5>
        <Button onClick={() => navigate('/home/payments/add')} variant="success">
          + Add Payment
        </Button>
      </div>

      <Table bordered hover responsive className="shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Semester</th>
            <th>Course</th>
            <th>Amount (VND)</th>
            <th>Date</th>
            <th style={{ width: '220px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((p) => (
            <tr key={p.id}>
              <td>{p.semester}</td>
              <td>{p.courseName}</td>
              <td>{p.amount.toLocaleString('vi-VN')}</td>
              <td>{new Date(p.date).toLocaleDateString('vi-VN')}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => navigate(`/home/payments/${p.id}`)}
                  >
                    View
                  </Button>

                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => navigate(`/home/payments/add?id=${p.id}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      if (window.confirm(`Xác nhận xóa payment cho khóa ${p.courseName}?`))
                        handleDelete(p.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentTable;
