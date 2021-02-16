import store from 'store2';
import { sortBy } from './sortBy';

const booksStorage = store.namespace('books');

export const getBooksStateFromStorage = () => {
  const authorsObject = booksStorage.getAll() || [];

  const pageSize = 2;
  const sortOrder = store('booksSortOrder') || 'title';
  const booksList = Object.keys(authorsObject)
    .map((key) => authorsObject[key])
    .sort(sortBy(sortOrder));
  const total = booksList.length;
  const currentPage = 1;

  return {
    booksList,
    currentPageBooks: [],
    total,
    pageSize,
    currentPage,
    sortOrder,
  };
};
