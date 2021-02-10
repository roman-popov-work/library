import React from 'react';
import { Typography } from 'antd';
import { BookForm } from '../BookForm/BookForm';
import styles from './AddBookPage.module.scss';

const { Title } = Typography;

export const AddBookPage = () => (
  <div className={styles.wrapper}>
    <Title level={2}>Добавление книги</Title>
    <BookForm />
  </div>
);
