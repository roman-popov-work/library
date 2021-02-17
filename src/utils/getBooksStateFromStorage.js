import store from 'store2';
import { getCurrentPageBooks } from './getCurrentPageBooks';

const booksStorage = store.namespace('books');

export const getBooksStateFromStorage = () => {
  const booksMap = booksStorage.getAll() || {};
  const pageSize = 10;
  const sortOrder = store('booksListSortOrder') || 'title';
  const currentPage = store('booksListCurrentPage') || 1;

  const booksList = Object.keys(booksMap).map((id) => booksMap[id]);
  const total = booksList.length;
  const currentPageBooks = getCurrentPageBooks(currentPage, pageSize, booksMap, sortOrder);

  return {
    booksMap,
    currentPageBooks,
    total,
    pageSize,
    currentPage,
    sortOrder,
  };
};
