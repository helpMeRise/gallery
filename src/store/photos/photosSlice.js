import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  data: [],
  isLast: false,
  error: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    photosRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    photosRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
});

export default photosSlice.reducer;
