import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

export const AddBookButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/add');
  };

  return (
    <Button type="primary" onClick={handleClick}>Добавить книгу</Button>
  );
};
