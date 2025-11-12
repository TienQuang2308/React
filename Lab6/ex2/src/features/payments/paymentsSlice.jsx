// src/features/payments/paymentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk tạo payment mới
export const createPayment = createAsyncThunk(
  'payments/createPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:3001/payments', paymentData);
      return res.data;
    } catch (err) {
      if (err.response?.status === 402) {
        return rejectWithValue('Tài khoản không đủ tiền');
      }
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createPayment.pending, state => { state.isLoading = true; state.error = null; })
      .addCase(createPayment.fulfilled, (state, action) => { state.isLoading = false; state.list.push(action.payload); })
      .addCase(createPayment.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; });
  }
});

// Selector lọc payment thành công
export const selectSuccessfulPayments = (state) =>
  state.payments.list.filter(p => p.status === 'SUCCESS');

export default paymentsSlice.reducer;
