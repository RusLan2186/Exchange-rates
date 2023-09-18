import { createSlice } from '@reduxjs/toolkit';

const innitialState = {
  currency: [],
  error: '',
  isLoading: fakse,
};

export const currencySlice = createSlice({
  name: 'currency',
  innitialState,
  reducers: {
    currencyFetching: (state) => {
      state.isLoading = true;
    },
    currencyFetchingSuccess: (state, action) => {
      state.isLoading = false;
      state.currency = action.payload;
      state.error = '';
    },
    currencyFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { currencyFetching, currencyFetchingError, currencyFetchingSuccess } =
  currencySlice.actions;
export default currencySlice.reducer;
