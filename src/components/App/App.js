import { Layout } from 'antd';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import './App.scss';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Content>
        Content
      </Content>
    </Layout>
  );
}
