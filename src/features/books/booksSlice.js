import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { v4 } from 'uuid';
import { getCurrentPageBooks } from '../../utils/getCurrentPageBooks';

const booksStorage = store.namespace('books');

const initialState = {
  booksMap: {},
  currentPageBooks: [],
  total: 0,
  pageSize: 10,
  currentPage: 1,
  sortOrder: 'title',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const { book } = action.payload;
      /* eslint-disable no-param-reassign */
      state.booksMap[book.id] = book;
      state.total += 1;
      /* eslint-enable */
    },
    editBook(state, action) {
      const { book } = action.payload;
      /* eslint-disable no-param-reassign */
      state.booksMap[book.id] = book;
      // eslint-disable-next-line max-len
      state.currentPageBooks = getCurrentPageBooks(state.currentPage, state.pageSize, state.booksMap, state.sortOrder);
      /* eslint-enable */
    },
    changeSortOrder(state, action) {
      /* eslint-disable no-param-reassign */
      state.sortOrder = action.payload.sortOrder;
      /* eslint-enable */
    },
    changePage(state, action) {
      /* eslint-disable no-param-reassign */
      const { page } = action.payload;
      state.currentPage = page;
      // eslint-disable-next-line max-len
      state.currentPageBooks = getCurrentPageBooks(page, state.pageSize, state.booksMap, state.sortOrder);
      /* eslint-enable */
    },
    removeBook(state, action) {
      /* eslint-disable no-param-reassign */
      const { id } = action.payload;
      delete state.booksMap[id];
      state.total -= 1;
      // eslint-disable-next-line max-len
      state.currentPageBooks = getCurrentPageBooks(state.currentPage, state.pageSize, state.booksMap, state.sortOrder);
      /* eslint-enable */
    },
  },
});

export const {
  addBook, editBook, changeSortOrder, changePage, removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;

export const saveBook = (book) => (dispatch) => {
  const id = book.id || v4();
  const bookObject = {
    ...book,
    id,
  };
  booksStorage(id, bookObject);
  if (book.id) {
    dispatch(editBook({ book: bookObject }));
  } else {
    dispatch(addBook({ book: bookObject }));
  }
};

export const saveSortOrder = (sortOrder) => (dispatch) => {
  store('booksListSortOrder', sortOrder);
  dispatch(changeSortOrder({ sortOrder }));
};

export const saveCurrentPage = (page) => (dispatch) => {
  store('booksListCurrentPage', page);
  dispatch(changePage({ page }));
};

export const deleteBook = (id) => (dispatch) => {
  booksStorage.remove(id);
  dispatch(removeBook({ id }));
};
