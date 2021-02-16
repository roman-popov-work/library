import { combineReducers } from '@reduxjs/toolkit';
import authorsSlice from './features/authors/authorsSlice';

export const rootReducer = combineReducers({
  authors: authorsSlice,
});
