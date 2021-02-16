import React from 'react';
import styles from './Characteristic.module.scss';

const CharacteristicComponent = ({ label, value }) => (
  <dl className={styles.wrapper}>
    <dt className={styles.label}>{label}</dt>
    <dd className={styles.value}>{value}</dd>
  </dl>
);

export const Characteristic = React.memo(CharacteristicComponent);
