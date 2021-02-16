import {
  Form, Input, Button,
} from 'antd';
import React, { useCallback } from 'react';
import { firstNameRules, lastNameRules } from './validationRules';
import styles from './AuthorForm.module.scss';

export const AuthorForm = ({ handleCancel, handleSubmit }) => {
  const onCancel = useCallback(() => {
    handleCancel();
  }, [handleCancel]);

  const onFinish = (values) => {
    console.log('Success:', values);
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="authorForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Имя"
        name="firstName"
        rules={firstNameRules}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={lastNameRules}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.lastFormItem}>
        <Button onClick={onCancel}>Отмена</Button>
        <Button type="primary" htmlType="submit" className={styles.submitButton}>Добавить автора</Button>
      </Form.Item>
    </Form>
  );
};
