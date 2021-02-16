import moment from 'moment';

export const serializeBook = (book) => ({
  ...book,
  publicationYear: book.publicationYear.format('YYYY'),
  releaseDate: book.releaseDate.format('DD.MM.YYYY'),
});

export const deserializeBook = (book) => ({
  ...book,
  publicationYear: moment.parse(book.publicationYear, 'YYYY'),
  releaseDate: moment.parse(book.releaseDate, 'DD.MM.YYYY'),
});
