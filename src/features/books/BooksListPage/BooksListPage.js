import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Row, Col, Pagination, notification,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { BooksListSort } from '../BooksListSort/BooksListSort';
import { BooksListItem } from '../BooksListItem/BooksListItem';
import { saveSortOrder, saveCurrentPage, deleteBook } from '../booksSlice';
import styles from './BooksListPage.module.scss';

export const BooksListPage = () => {
  const {
    currentPageBooks, booksMap, sortOrder, currentPage, total, pageSize,
  } = useSelector((state) => state.books);
  const authors = useSelector((state) => state.authors);
  const books = currentPageBooks.map((book) => {
    const authorList = book.authorList.map((id) => authors[id]);
    return {
      ...book,
      authorList,
    };
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSetSortOrder = (e) => {
    dispatch(saveSortOrder(e.target.value));
    dispatch(saveCurrentPage(1));
  };

  const handlePageChange = (page) => {
    dispatch(saveCurrentPage(page));
  };

  const handleBookEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleBookDelete = (id) => {
    const { title } = booksMap[id];
    dispatch(deleteBook(id));
    notification.open({
      message: 'Книга удалена',
      description: `Книга "${title}" успешно удалена из списка книг`,
    });
  };

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
        {
          books.map((item) => (
            <BooksListItem
              key={item.id}
              book={item}
              onEditBook={handleBookEdit}
              onDeleteBook={handleBookDelete}
            />
          ))
        }
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
