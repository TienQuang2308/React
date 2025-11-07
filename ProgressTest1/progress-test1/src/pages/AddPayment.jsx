import React, { useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePayment } from '../contexts/PaymentContext';

const AddPayment = () => {
  const { payments, handleAdd, handleUpdate, getPaymentById } = usePayment();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const editId = searchParams.get('id');
  const [form, setForm] = useState({
    semester: '',
    courseName: '',
    amount: '',
    date: '',
    userId: '1',
  });

  const [loading, setLoading] = useState(false);

  // Lấy dữ liệu khi edit
  useEffect(() => {
    const fetchData = async () => {
      if (editId) {
        setLoading(true);
        try {
          const existing = await getPaymentById(editId);
          setForm(existing);
        } catch (err) {
          console.error('Error loading payment:', err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [editId]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) {
        await handleUpdate(editId, form);
      } else {
        await handleAdd({
          ...form,
          id: Date.now().toString(),
          amount: parseInt(form.amount),
        });
      }
      navigate('/home/payments');
    } catch (err) {
      console.error('Error saving payment:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h5>{editId ? 'Edit Payment' : 'Add New Payment'}</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Semester</Form.Label>
          <Form.Control
            name="semester"
            value={form.semester}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            name="courseName"
            value={form.courseName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount (VND)</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          {editId ? 'Update' : 'Add'}
        </Button>{' '}
        <Button variant="secondary" onClick={() => navigate('/home/payments')}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AddPayment;
