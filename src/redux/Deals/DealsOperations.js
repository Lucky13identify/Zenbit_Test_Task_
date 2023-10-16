import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeals = createAsyncThunk('deals', async () => {
  try {
    const { data } = await axios.get('/api/deals');
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
});
