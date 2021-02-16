import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { v4 } from 'uuid';
import { sortBy } from '../../utils/sortBy';

const booksStorage = store.namespace('books');

const initialState = {
  booksList: [],
  currentPageBooks: [],
  total: 0,
  pageSize: 2,
  currentPage: 1,
  sortOrder: 'title',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      /* eslint-disable no-param-reassign */
      state.booksList = [...state.booksList, action.payload.book].sort(sortBy(state.sortOrder));
      state.total = state.booksList.length;
      state.currentPage = 1;
      /* eslint-enable */
    },
    changeSortOrder(state, action) {
      /* eslint-disable no-param-reassign */
      state.sortOrder = action.payload.sortOrder;
      state.booksList = [...state.booksList].sort(sortBy(state.sortOrder));
      state.currentPage = 1;
      /* eslint-enable */
    },
    changePage(state, action) {
      /* eslint-disable no-param-reassign */
      state.currentPage = action.payload.page;
      /* eslint-enable */
    },
  },
});

export const { addBook, changeSortOrder, changePage } = booksSlice.actions;

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
