import React from 'react';
import { Layout } from 'antd';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { AddBookButton } from '../../features/books/AddBookButton/AddBookButton';

import styles from './Header.module.scss';

const HeaderComponent = Layout.Header;

export const Header = () => (
  <HeaderComponent>
    <Container>
      <div className={styles.innerWrapper}>
        <Logo />
        <AddBookButton />
      </div>
    </Container>
  </HeaderComponent>
);
