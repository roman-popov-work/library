import { sortBy } from './sortBy';

export const getCurrentPageBooks = (currentPage, pageSize, booksMap, sortOrder) => {
  const booksList = Object.keys(booksMap).map((id) => booksMap[id]);
  const sortedBookList = booksList.sort(sortBy(sortOrder));
  const from = (currentPage - 1) * pageSize;
  const to = from + pageSize;
  return sortedBookList.slice(from, to);
};
