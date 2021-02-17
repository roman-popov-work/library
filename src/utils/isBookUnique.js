export const isBookUnique = (title, authors, booksMap) => {
  if (!title || !authors || !authors.length) {
    return false;
  }

  const foundBook = Object.keys(booksMap)
    .map((id) => booksMap[id])
    .find((book) => (
      title.toLowerCase() === book.title.toLowerCase()
      && authors.every((author) => book.authorList.includes(author))
    ));

  return !foundBook;
};
