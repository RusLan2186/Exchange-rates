import { configureStore } from '@reduxjs/toolkit';
import currency from './slices/currencySlice';

export const story = configureStore({
  reducer: {
    currency,
  },
});
