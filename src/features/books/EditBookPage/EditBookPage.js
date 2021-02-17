import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, notification } from 'antd';
import { saveBook, saveCurrentPage } from '../booksSlice';
import { BookForm } from '../BookForm/BookForm';
import { sortBy } from '../../../utils/sortBy';
import { serializeBook, deserializeBook } from '../../../utils/serializeBook';
import { isBookUnique } from '../../../utils/isBookUnique';
import { LAST_NAME } from '../../../constants/sortOrder';
import styles from './EditBookPage.module.scss';

const { Title } = Typography;

export const EditBookPage = () => {
  const [submitError, setSubmitError] = useState('');
  const authors = useSelector((state) => state.authors);
  const { booksMap } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const history = useHistory();

  const { bookId } = useParams();
  const currentBook = booksMap[bookId];
  const deserializedBook = deserializeBook(currentBook);

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

  return (
    <div className={styles.wrapper}>
      <Title level={2}>Редактирование книги</Title>
      <BookForm
        initialState={deserializedBook}
        authorsOptions={authorsOptions}
        onSubmit={handleSubmit}
        submitError={submitError}
      />
    </div>
  );
};
