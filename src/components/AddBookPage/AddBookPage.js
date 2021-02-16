import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { BookForm } from '../BookForm/BookForm';
import { sortByLastName } from '../../utils/sortByLastName';
import styles from './AddBookPage.module.scss';

const { Title } = Typography;

export const AddBookPage = () => {
  const authors = useSelector((state) => state.authors);

  const authorsOptions = [...authors]
    .sort(sortByLastName)
    .map(({ id, firstName, lastName }) => ({
      value: id,
      label: `${firstName} ${lastName}`,
    }));

  return (
    <div className={styles.wrapper}>
      <Title level={2}>Добавление книги</Title>
      <BookForm authorsOptions={authorsOptions} />
    </div>
  );
};
