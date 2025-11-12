// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk: fetch users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:3001/users');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleAdmin: (state, action) => {
      const user = state.list.find(u => u.id === action.payload);
      if (user) user.isAdmin = !user.isAdmin;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { toggleAdmin } = usersSlice.actions;
export default usersSlice.reducer;
