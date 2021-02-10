import React from 'react';
import styles from './Container.module.scss';

export const Container = ({ children, ...rest }) => (
  <div className={styles.container} {...rest}>
    {children}
  </div>
);
