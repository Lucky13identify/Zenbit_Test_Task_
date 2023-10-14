import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeals = createAsyncThunk('', async () => {
  try {
    const { data } = await axios.get('');
    return data;
  } catch (e) {
    console.log(e);
  }
});
