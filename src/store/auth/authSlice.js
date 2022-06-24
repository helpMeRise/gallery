import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    authRequestSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
    },
    authRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
});

export default authSlice.reducer;
