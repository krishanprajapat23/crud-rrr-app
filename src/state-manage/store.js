import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Configure the Redux store with the tasksReducer
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});