//api.js chứa các hàm gọi API tới JSON Server
import axios from 'axios';
// Cấu hình Base URL cho JSON Server
// Giả định JSON Server đang chạy trên cổng 3001 
const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
    try {
        const response = await API.get('/users');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

// ✅ Get user by ID
export const getUserById = async (id) => {
  const res = await API.get(`/users/${id}`);
  return res.data;
};

// ✅ Update user
export const updateUser = async (id, updatedUser) => {
  const res = await API.put(`/users/${id}`, updatedUser);
  return res.data;
};

// ✅ Delete user
export const deleteUser = async (id) => {
  await API.delete(`/users/${id}`);
};

//2.Các hàm API khác có thể được thêm vào đây

// ===== PAYMENTS =====
export const getPayments = async () => {
  const res = await API.get('/payments');
  return res.data;
};

export const getPaymentById = async (id) => {
  const res = await API.get(`/payments/${id}`);
  return res.data;
};

export const addPayment = async (payment) => {
  const res = await API.post('/payments', payment);
  return res.data;
};

export const updatePayment = async (id, updated) => {
  const res = await API.put(`/payments/${id}`, updated);
  return res.data;
};

export const deletePayment = async (id) => {
  await API.delete(`/payments/${id}`);
};