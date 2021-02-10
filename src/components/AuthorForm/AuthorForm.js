import React, { useCallback } from 'react';
import {
  Form, Input, Button,
} from 'antd';
import { firstNameRules, lastNameRules } from './validationRules';

export const AuthorForm = ({ handleCancel, handleSubmit }) => {
  const onCancel = useCallback(() => {
    handleCancel();
  }, [handleCancel]);

  const onFinish = (values) => {
    console.log('Success:', values);
    handleSubmit();
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
      <Form.Item>
        <Button onClick={onCancel}>Отмена</Button>
        <Button type="primary" htmlType="submit">Добавить автора</Button>
      </Form.Item>
    </Form>
  );
};
