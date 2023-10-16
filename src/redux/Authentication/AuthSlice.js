import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './AuthOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  reject: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [register.rejected](state, action) {
      state.reject = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.reject = false;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.reject = false;
    },
    [register.rejected](state, action) {
      state.reject = true;
    },
    [login.rejected](state, action) {
      state.reject = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.reject = false;
    },
  },
});

export const authReducer = authSlice.reducer;
