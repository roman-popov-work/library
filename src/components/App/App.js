import React from 'react';
import { Layout } from 'antd';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { List } from '../List/List';
import './App.scss';

export const App = () => (
  <Layout>
    <Header />
    <Content>
      <List />
    </Content>
  </Layout>
);
