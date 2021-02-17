import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, notification } from 'antd';
import { BookForm } from '../BookForm/BookForm';
import { saveBook, saveCurrentPage } from '../booksSlice';
import { sortBy } from '../../../utils/sortBy';
import { serializeBook } from '../../../utils/serializeBook';
import { isBookUnique } from '../../../utils/isBookUnique';
import { LAST_NAME } from '../../../constants/sortOrder';
import styles from './AddBookPage.module.scss';

const { Title } = Typography;

export const AddBookPage = () => {
  const [submitError, setSubmitError] = useState('');
  const authors = useSelector((state) => state.authors);
  const { booksMap } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const history = useHistory();

  const authorsOptions = Object.keys(authors)
    .map((id) => {
      const { firstName, lastName } = authors[id];
      return {
        value: id,
        label: `${firstName} ${lastName}`,
        lastName,
      };
    })
    .sort(sortBy(LAST_NAME));

  const handleSubmit = (book) => {
    const bookIsUnique = isBookUnique(book.title, book.authorList, booksMap);
    if (bookIsUnique) {
      const serializedBook = serializeBook(book);
      dispatch(saveBook(serializedBook));
      dispatch(saveCurrentPage(1));
      history.push('/');
      notification.open({
        message: 'Книга добавлена',
        description: `Книга "${book.title}" успешно добавлена в список книг`,
      });
    } else {
      setSubmitError('Такая книга уже есть в списке');
    }
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <Title level={2}>Добавление книги</Title>
      <BookForm
        authorsOptions={authorsOptions}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitError={submitError}
      />
    </div>
  );
};
