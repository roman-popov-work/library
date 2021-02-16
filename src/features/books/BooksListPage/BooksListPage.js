import React from 'react';
import { useSelector } from 'react-redux';
import { BooksList } from '../BooksList/BooksList';
import styles from './BooksListPage.module.scss';

export const BooksListPage = () => {
  const { booksList } = useSelector((state) => state.books);

  return (
    <div className={styles.wrapper}>
      <BooksList books={booksList} />
    </div>
  );
};
