import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://zenbit-test-task-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const login = createAsyncThunk('auth/login', async object => {
  try {
    const { data } = await axios.post('/api/auth/login', object);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk('auth/register', async object => {
  try {
    const { data } = await axios.post('/api/auth/register', object);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
    throw error;
  }
});
