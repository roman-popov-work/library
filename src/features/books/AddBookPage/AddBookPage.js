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

  const authorsOptions = [...authors]
    .sort(sortBy(LAST_NAME))
    .map(({ id, firstName, lastName }) => ({
      value: id,
      label: `${firstName} ${lastName}`,
    }));

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
