import React, { useMemo } from 'react';
import styles from './BookImage.module.scss';

export const BookImage = ({ url }) => {
  const style = useMemo(() => ({
    backgroundImage: `url(${url})`,
  }), [url]);

  return (
    <div className={styles.bookImage} style={style} />
  );
};
