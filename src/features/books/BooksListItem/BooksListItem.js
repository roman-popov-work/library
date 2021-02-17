import React from 'react';
import {
  Row, Col, Typography, Menu, Dropdown, Modal,
} from 'antd';
import {
  EditOutlined, DeleteOutlined, MoreOutlined, ExclamationCircleOutlined,
} from '@ant-design/icons';
import { ImagePlaceholder } from '../../../components/ImagePlaceholder/ImagePlaceholder';
import { Characteristic } from '../Characteristic/Characteristic';
import { BookImage } from '../BookImage/BookImage';
import styles from './BooksListItem.module.scss';

const { Title, Text } = Typography;
const { confirm } = Modal;

export const BooksListItem = ({ book, onDeleteBook, onEditBook }) => {
  const {
    id, title, authorList, numberOfPages, publicationYear, releaseDate, publisherName, bookImage,
  } = book;

  const handleMenuClick = ({ key }) => {
    if (key === 'delete') {
      confirm({
        title: 'Вы действительно хотите удалить эту книгу?',
        icon: <ExclamationCircleOutlined />,
        content: `Книга "${title}" будет удалена безвозвратно`,
        onOk() {
          onDeleteBook(id);
        },
        okText: 'Да',
        cancelText: 'Нет',
      });
    }

    if (key === 'edit') {
      onEditBook(id);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Редактировать
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Удалить
      </Menu.Item>
    </Menu>
  );

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
      <div className={styles.dropdownWrapper}>
        <Dropdown overlay={menu} trigger={['click']}>
          <MoreOutlined className={styles.moreIcon} />
        </Dropdown>
      </div>
    </div>
  );
};
