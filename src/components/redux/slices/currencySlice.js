import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencyList: [],
  error: '',
  isLoading: false,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    currencyFetching: (state) => {
      state.isLoading = true;
    },
    currencyFetchingSuccess: (state, action) => {
      state.currencyList = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    currencyFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { currencyFetching, currencyFetchingError, currencyFetchingSuccess, currencySearch } =
  currencySlice.actions;
export default currencySlice.reducer;
