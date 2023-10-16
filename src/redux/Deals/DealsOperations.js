import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDeals = createAsyncThunk('deals', async () => {
  try {
    const { data } = await axios.get('/api/deals');
    return data;
  } catch (error) {
    throw error;
  }
});
