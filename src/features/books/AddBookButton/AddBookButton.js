import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

export const AddBookButton = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/add');
  }, []);

  return (
    <Button type="primary" onClick={handleClick}>Добавить книгу</Button>
  );
};
