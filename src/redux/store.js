import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { fetchDeals } from './operations';
import { autsSlice } from './Authentication/AuthSlice';

export const initialState = {
  deals: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const dealsSlice = createSlice({
  name: 'deals',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export const store = configureStore({
  reducer: {
    deals: dealsSlice.reducer,
    auth: autsSlice.reducer,
  },
});
