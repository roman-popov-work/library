import React from 'react';
import { Layout } from 'antd';
import { Container } from '../Container/Container';
import './Content.module.scss';

const ContentComponent = Layout.Content;

export const Content = ({ children }) => (
  <ContentComponent className="appContent">
    <Container>{children}</Container>
  </ContentComponent>
);
