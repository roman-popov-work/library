import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { v4 } from 'uuid';
import { sortBy } from '../../utils/sortBy';

const booksStorage = store.namespace('books');

const initialState = {
  booksList: [],
  currentPageBooks: [],
  pageCount: 0,
  pageSize: 2,
  currentPage: 1,
  sortOrder: 'title',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      console.log('action.payload.book', action.payload.book);
      console.log('state.sortOrder', state.sortOrder);
      // eslint-disable-next-line no-param-reassign
      state.booksList = [...state.booksList, action.payload.book].sort(sortBy(state.sortOrder));
    },
    changeSortOrder(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.sortOrder = action.payload.sortOrder;
    },
  },
});

export const { addBook, changeSortOrder } = booksSlice.actions;

export default booksSlice.reducer;

export const saveBook = (book) => (dispatch) => {
  const id = v4();
  const bookObject = {
    id,
    ...book,
  };
  booksStorage(id, bookObject);
  dispatch(addBook({ book: bookObject }));
};

export const saveSortOrder = (sortOrder) => (dispatch) => {
  store('booksSortOrder', sortOrder);
  dispatch(changeSortOrder({ sortOrder }));
};
