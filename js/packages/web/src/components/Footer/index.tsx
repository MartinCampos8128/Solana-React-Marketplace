import React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Row, Col, Image, Menu, List } from 'antd';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../utils/layout';

export const Footer = () => {

  const { width } = useWindowDimensions();
  return (
    <div className={'footer'}>
      {width > 992 ? (
        <>
          <div className="section">
            <Row className="pic">
              <Col span={3}>
                <Image src="./img/Logo1.png" preview={false} style={{
                  width: '80px'
                }} />
              </Col>
              <Col span={3}>
                <List className="pic">
                  <List.Item>
                    <Link to={`/`}>Home</Link>
                  </List.Item>
                  <List.Item><Link to={`/`}>Create</Link></List.Item>
                </List>
              </Col>
              <Col span={3}>
                <List className="pic">
                  <List.Item>
                    Turtorials
                  </List.Item>
                  <List.Item><Link to={`/blog`}>Blog</Link></List.Item>
                </List>
              </Col>
              <Col span={3}>
                <List className="pic">
                  <List.Item>
                    <Link to={`/about`}>About</Link>
                  </List.Item>
                  <List.Item><Link to={`/faq`}>FAQs</Link></List.Item>
                </List>
              </Col>
              <Col span={3} offset={3} className="pic">
                <Image src="./img/Twitter.png" preview={false} className="pic" />
              </Col>
              <Col span={3} className="pic">
                <Image src="./img/YouTube.png" preview={false} className="pic" />
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          <div className="section">
            <Row className="pic">
              <Col span={8}>
                <List>
                  <List.Item>
                    <Link to={`/`}>Home</Link>
                  </List.Item>
                  <List.Item><Link to={`/`}>Create</Link></List.Item>
                </List>
              </Col>
              <Col span={8} className="pic">
                <List>
                  <List.Item>
                    Turtorials
                  </List.Item>
                  <List.Item><Link to={`/blog`}>Blog</Link></List.Item>
                </List>
              </Col>
              <Col span={8} className="pic">
                <List>
                  <List.Item>
                    <Link to={`/about`}>About</Link>
                  </List.Item>
                  <List.Item><Link to={`/faq`}>FAQs</Link></List.Item>
                </List>
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  );
};
