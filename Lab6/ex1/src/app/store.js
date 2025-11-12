// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice'; // đúng đường dẫn

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});
