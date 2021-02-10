import React, { useState, useCallback } from 'react';
import { Modal, Button } from 'antd';
import { AuthorForm } from '../AuthorForm/AuthorForm';
import styles from './AddAuthorInput.module.scss';

export const AddAuthorInput = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <Button type="primary" onClick={showModal} className={styles.addButton} block>
        Добавить нового автора
      </Button>
      <Modal
        title="Добавление нового автора"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        destroyOnClose
      >
        <AuthorForm handleSubmit={handleSubmit} handleCancel={handleCancel} />
      </Modal>
    </>
  );
};
