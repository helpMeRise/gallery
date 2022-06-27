import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    tokenRequest: (state) => {
      state.token = '';
      state.error = '';
    },
    tokenRequestSuccess: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
    },
    tokenRequestError: (state, action) => {
      state.token = '';
      state.error = action.payload.error;
    }
  }
});

export default tokenSlice.reducer;
