import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './ContactSlice/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
