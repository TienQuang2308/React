import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { usePayment } from '../contexts/PaymentContext';

const ViewPayment = () => {
  const { id } = useParams();
  const { getPaymentById } = usePayment();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchPayment = async () => {
    try {
      const data = await getPaymentById(id);
      setPayment(data);
    } catch (err) {
      console.error('Error fetching payment:', err);
    } finally {
      setLoading(false);
    }
  };
  fetchPayment();
}, [id, getPaymentById]); // ✅ thêm getPaymentById vào đây

  if (loading) return <Spinner animation="border" />;
  if (!payment) return <p>Payment not found.</p>;

  return (
    <Card>
      <Card.Header>Payment Details</Card.Header>
      <Card.Body>
        <p><strong>Semester:</strong> {payment.semester}</p>
        <p><strong>Course:</strong> {payment.courseName}</p>
        <p><strong>Amount:</strong> {payment.amount.toLocaleString()} VND</p>
        <p><strong>Date:</strong> {payment.date}</p>
        <Button
          variant="warning"
          className="me-2"
          onClick={() => navigate(`/home/payments/add?id=${payment.id}`)}
        >
          Edit
        </Button>
        <Button variant="secondary" onClick={() => navigate('/home/payments')}>
          Back
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ViewPayment;
