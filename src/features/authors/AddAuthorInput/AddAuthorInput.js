import React, { useState, useCallback } from 'react';
import { Modal, Button, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorForm } from '../AuthorForm/AuthorForm';
import { saveAuthor } from '../authorsSlice';
import { isAuthorUnique } from '../../../utils/isAuthorUnique';
import styles from './AddAuthorInput.module.scss';

export const AddAuthorInput = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = ({ firstName, lastName }) => {
    const authorIsUnique = isAuthorUnique(firstName, lastName, authors);
    if (authorIsUnique) {
      setSubmitError('');
      dispatch(saveAuthor(firstName, lastName));
      setIsModalVisible(false);
      notification.open({
        message: 'Автор добавлен',
        description: `${firstName} ${lastName} успешно добавлен(а) в список авторов`,
      });
    } else {
      setSubmitError('Такой автор уже есть в списке');
    }
  };

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    setSubmitError('');
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
        <AuthorForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          submitError={submitError}
        />
      </Modal>
    </>
  );
};
