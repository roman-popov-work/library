import moment from 'moment';

export const serializeBook = (book) => ({
  ...book,
  publicationYear: book.publicationYear ? book.publicationYear.format('YYYY') : undefined,
  releaseDate: book.releaseDate ? book.releaseDate.format('DD.MM.YYYY') : undefined,
});

export const deserializeBook = (book) => ({
  ...book,
  publicationYear: book.publicationYear ? moment(book.publicationYear, 'YYYY') : undefined,
  releaseDate: book.releaseDate ? moment(book.releaseDate, 'DD.MM.YYYY') : undefined,
});
