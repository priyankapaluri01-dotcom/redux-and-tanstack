import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from '../features/coffeeSlice';


export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
});