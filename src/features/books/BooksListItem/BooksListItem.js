import React from 'react';
import { Row, Col, Typography } from 'antd';
import { ImagePlaceholder } from '../../../components/ImagePlaceholder/ImagePlaceholder';
import { Characteristic } from '../Characteristic/Characteristic';
import { BookImage } from '../BookImage/BookImage';
import styles from './BooksListItem.module.scss';

const { Title, Text } = Typography;

export const BooksListItem = ({ book }) => {
  const {
    title, authorList, numberOfPages, publicationYear, releaseDate, publisherName, bookImage,
  } = book;
  return (
    <div className={styles.wrapper}>
      <Row>
        <Col span={5}>
          {
            bookImage
              ? (
                <div className={styles.imageWrapper}>
                  <BookImage url={bookImage} />
                </div>
              )
              : <ImagePlaceholder />
          }
        </Col>
        <Col span={19}>
          <div className={styles.dataWrapper}>
            <Title level={3}>{title}</Title>
            <Text type="secondary">Авторы: </Text>
            <Text>{authorList.map(({ firstName, lastName }) => `${firstName} ${lastName}`).join(', ')}</Text>
            <div className={styles.characteristicsWrapper}>
              <Row gutter={30}>
                <Col span={12}>
                  <Characteristic label="Количество страниц" value={numberOfPages} />
                  <Characteristic label="Год публикации" value={publicationYear || '—'} />
                  <Characteristic label="Дата выхода в тираж" value={releaseDate || '—'} />
                </Col>
                <Col span={12}>
                  <Characteristic label="ISBN" value={book.isbn || '—'} />
                  <Characteristic label="Название издательства" value={publisherName || '—'} />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
