import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    accessToken: null,
    refreshToken: null,
    error: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user
      state.error = null;
    },
    loginUser: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.data.user;
      state.accessToken = action.payload.data.data.accessToken
      state.refreshToken = action.payload.data.data.refreshToken
    },
    logoutUser: (state) => {
      state.loading = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

// Async thunk action creator for login



