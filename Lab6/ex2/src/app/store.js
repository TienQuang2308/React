// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import paymentsReducer from '../features/payments/paymentsSlice';

export const store = configureStore({
  reducer: {
    payments: paymentsReducer
  }
});
