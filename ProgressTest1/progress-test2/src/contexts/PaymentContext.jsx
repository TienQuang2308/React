// src/contexts/PaymentContext.jsx
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import {
  getPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
} from '../services/api';

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    semester: '',
    course: '',
    sort: 'date_desc',
  });

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const data = await getPayments();
      setPayments(data);
    } catch (err) {
      console.error('Lỗi tải payments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (payment) => {
    const newPayment = await addPayment(payment);
    setPayments((prev) => [newPayment, ...prev]);
    return newPayment;
  };

  const handleUpdate = async (id, updated) => {
    const result = await updatePayment(id, updated);
    setPayments((prev) => prev.map((p) => (p.id === id ? result : p)));
    return result;
  };

  const handleDelete = async (id) => {
    await deletePayment(id);
    setPayments((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // ⚡ Apply filter, search, sort
  const filteredPayments = useMemo(() => {
    let data = [...payments];
    const { search, semester, course, sort } = filters;

    // Tìm kiếm
    if (search) {
      data = data.filter(
        (p) =>
          p.semester.toLowerCase().includes(search.toLowerCase()) ||
          p.courseName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Lọc
    if (semester) data = data.filter((p) => p.semester === semester);
    if (course) data = data.filter((p) => p.courseName === course);

    // Sắp xếp
    switch (sort) {
      case 'course_asc':
        data.sort((a, b) => a.courseName.localeCompare(b.courseName));
        break;
      case 'course_desc':
        data.sort((a, b) => b.courseName.localeCompare(a.courseName));
        break;
      case 'date_asc':
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'date_desc':
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'amount_asc':
        data.sort((a, b) => a.amount - b.amount);
        break;
      case 'amount_desc':
        data.sort((a, b) => b.amount - a.amount);
        break;
      default:
        break;
    }

    return data;
  }, [payments, filters]);

  return (
    <PaymentContext.Provider
      value={{
        payments,
        filteredPayments,
        loading,
        filters,
        setFilters,
        fetchPayments,
        handleAdd,
        handleUpdate,
        handleDelete,
        getPaymentById,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export const usePayment = () => useContext(PaymentContext);
