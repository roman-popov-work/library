import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { v4 } from 'uuid';
import { getCurrentPageBooks } from '../../utils/getCurrentPageBooks';

const booksStorage = store.namespace('books');

const initialState = {
  booksMap: {},
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
      const { book } = action.payload;
      console.log('state.booksMap', state.booksMap);
      /* eslint-disable no-param-reassign */
      state.booksMap[book.id] = book;
      state.total += 1;
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
  store('booksListSortOrder', sortOrder);
  dispatch(changeSortOrder({ sortOrder }));
};

export const saveCurrentPage = (page) => (dispatch) => {
  store('booksListCurrentPage', page);
  dispatch(changePage({ page }));
};
