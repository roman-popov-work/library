import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BooksList } from '../BooksList/BooksList';
import { BooksListSort } from '../BooksListSort/BooksListSort';
import { saveSortOrder, changePage } from '../booksSlice';
import styles from './BooksListPage.module.scss';

export const BooksListPage = () => {
  const {
    booksList, sortOrder, currentPage, total, pageSize,
  } = useSelector((state) => state.books);
  const authors = useSelector((state) => state.authors);
  const books = booksList.map((book) => {
    const authorList = book.authorList.map((id) => authors[id]);
    return {
      ...book,
      authorList,
    };
  });
  const dispatch = useDispatch();

  const handleSetSortOrder = useCallback((e) => {
    dispatch(saveSortOrder(e.target.value));
  }, [dispatch]);

  const handlePageChange = useCallback((page) => {
    dispatch(changePage({ page }));
  }, [dispatch]);

  if (!books.length) {
    return (
      <div className={styles.noItems}>
        Здесь пока нет книг.
        <Link className={styles.addLink} to="/add">добавить?</Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Row>
          <Col span={12}>
            <BooksListSort sortOrder={sortOrder} setSortOrder={handleSetSortOrder} />
          </Col>
          <Col span={12}>
            <div className={styles.flexEnd}>
              <Pagination
                current={currentPage}
                onChange={handlePageChange}
                pageSize={pageSize}
                total={total}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.content}>
        <BooksList books={books} />
      </div>
      <div className={styles.footer}>
        <div className={styles.flexEnd}>
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            pageSize={pageSize}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};
