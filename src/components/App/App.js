import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { BooksListPage } from '../../features/books/BooksListPage/BooksListPage';
import { AddBookPage } from '../../features/books/AddBookPage/AddBookPage';
import { EditBookPage } from '../../features/books/EditBookPage/EditBookPage';
import './App.scss';

export const App = () => (
  <Layout>
    <Header />
    <Content>
      <Switch>
        <Route exact path="/">
          <BooksListPage />
        </Route>
        <Route path="/add">
          <AddBookPage />
        </Route>
        <Route path="/edit/:bookId">
          <EditBookPage />
        </Route>
      </Switch>
    </Content>
  </Layout>
);
