import React from 'react';
import { BooksListItem } from '../BooksListItem/BooksListItem';

export const BooksList = ({ books }) => (
  <div>
    {
      books.map((item) => (
        <BooksListItem key={item.id} book={item} />
      ))
    }
  </div>
);
