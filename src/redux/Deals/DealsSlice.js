import { createSlice } from '@reduxjs/toolkit';
import { fetchDeals } from './DealsOperations';

const initialState = {
  deals: [],
};

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDeals.fulfilled, (state, action) => {
      state.deals = action.payload.deals;
    });
  },
});

export const dealsReducer = dealsSlice.reducer;
