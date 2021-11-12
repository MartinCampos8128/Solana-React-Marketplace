import React from 'react';
import { Layout, Button, Row, Col, Image } from 'antd';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';
import { Footer } from '../Footer';
import useWindowDimensions from '../../utils/layout';

const { Header, Content } = Layout;

const paddingForLayout = (width: number) => {
  if (width <= 768) return '5px 10px';
  if (width > 768) return '10px 30px';
};

export const AppLayout = React.memo((props: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Layout>
        <Header className="App-Bar" style={{
          backgroundImage: "url('./img/banner1.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: paddingForLayout(width),
        }}>
          <AppBar />
        </Header>
        <Content>
          {props.children}
        </Content>
        <Footer />
      </Layout>
    </>
  );
});
