import React from 'react';
import { FileImageOutlined } from '@ant-design/icons';
import styles from './ImagePlaceholder.module.scss';

export const ImagePlaceholder = () => (
  <div className={styles.wrapper}>
    <FileImageOutlined className={styles.icon} />
    <span className={styles.text}>Нет изображения</span>
  </div>
);
