import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography } from 'antd';
import { BookForm } from '../BookForm/BookForm';
import { saveBook } from '../booksSlice';
import { sortBy } from '../../../utils/sortBy';
import { serializeBook } from '../../../utils/serializeBook';
import { LAST_NAME } from '../../../constants/sortOrder';
import styles from './AddBookPage.module.scss';

const { Title } = Typography;

export const AddBookPage = () => {
  const authors = useSelector((state) => state.authors);
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
    .sort(sortBy(LAST_NAME)); // sort by lastName of author

  const handleSubmit = (values) => {
    const serializedBook = serializeBook(values);
    dispatch(saveBook(serializedBook));
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <Title level={2}>Добавление книги</Title>
      <BookForm authorsOptions={authorsOptions} onSubmit={handleSubmit} />
    </div>
  );
};
