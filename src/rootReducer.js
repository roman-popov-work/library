import { combineReducers } from '@reduxjs/toolkit';
import authorsSlice from './features/authors/authorsSlice';
import booksSlice from './features/books/booksSlice';

export const rootReducer = combineReducers({
  authors: authorsSlice,
  books: booksSlice,
});
