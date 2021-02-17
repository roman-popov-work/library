import React, { useState } from 'react';
import {
  Form, Input, Button, Select, Row, Col, DatePicker, Upload, message, Typography,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import moment from 'moment';
import { AddAuthorInput } from '../../authors/AddAuthorInput/AddAuthorInput';
import { validationRules } from './validationRules';
import { getBase64 } from '../../../utils/getBase64';
import styles from './BookForm.module.scss';

const { Dragger } = Upload;
const { Text } = Typography;

export const BookForm = ({
  initialValues = {}, authorsOptions, onSubmit, onCancel, submitError,
}) => {
  const isEditForm = !!initialValues.id;
  const [imageUrl, setImageUrl] = useState(initialValues.bookImage || undefined);

  const onFinish = (values) => {
    onSubmit({
      ...values,
      title: values.title.trim(),
      bookImage: imageUrl,
      id: isEditForm ? initialValues.id : undefined,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    onCancel();
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Можно загружать только JPG/PNG файлы!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Размер файла не должен превышать 2Мб!');
    }

    if (isJpgOrPng && isLt2M) {
      getBase64(file, (url) => {
        setImageUrl(url);
      });
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <Form
      layout="vertical"
      name="bookForm"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Заголовок"
        name="title"
        rules={validationRules.title}
      >
        <Input type="text" />
      </Form.Item>

      <Row gutter={15}>
        <Col span={16}>
          <Form.Item
            label="Список авторов"
            name="authorList"
            rules={validationRules.authorList}
          >
            <Select
              mode="multiple"
              placeholder="Выберите автора"
              options={authorsOptions.map(({ value, label }) => ({
                value,
                label,
              }))}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <AddAuthorInput />
        </Col>
      </Row>

      <Form.Item
        label="Количество страниц"
        name="numberOfPages"
        rules={validationRules.numberOfPages}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Название издательства"
        name="publisherName"
        rules={validationRules.publisherName}
      >
        <Input type="text" />
      </Form.Item>

      <Row gutter={15}>
        <Col span={12}>
          <Form.Item
            label="Год публикации"
            name="publicationYear"
          >
            <DatePicker
              picker="year"
              placeholder="Выберите год"
              disabledDate={(current) => current && current < moment('1799-12-31', 'YYYY-MM-DD').endOf('day')}
              className={styles.fullWidth}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Дата выхода в тираж"
            name="releaseDate"
          >
            <DatePicker
              placeholder="Выберите дату"
              disabledDate={(current) => current && current < moment('1799-12-31', 'YYYY-MM-DD').endOf('day')}
              format="DD.MM.YYYY"
              className={styles.fullWidth}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="ISBN"
        name="isbn"
        rules={validationRules.isbn}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item>
        <Dragger
          name="imageUrl"
          accept="image/png, image/jpeg"
          multiple={false}
          beforeUpload={beforeUpload}
          customRequest={() => {}}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Для загрузки изображения нажмите или перетащите файл в эту зону</p>
          <p className="ant-upload-hint">
            Загрузить можно только один файл не больше 2Мб. Доступные расширения: JPEG, PNG
          </p>
        </Dragger>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditForm ? 'Редактировать книгу' : 'Добавить книгу'}
        </Button>
        <Button className={styles.cancel} onClick={handleCancel}>Отмена</Button>
      </Form.Item>
      {submitError && <Text className={styles.submitError} type="danger">{submitError}</Text>}
    </Form>
  );
};
