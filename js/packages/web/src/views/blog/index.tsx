import React from 'react';
import {Layout, Row, Col, Button, Image} from 'antd';

const { Content } = Layout;
const data = [
  {title: 'Article One', subtitle: 'September 9, 2021'},
  {title: 'Article Two', subtitle: 'September 9, 2021'},
  {title: 'Article Three', subtitle: 'September 9, 2021'},
  {title: 'Article Four', subtitle: 'September 9, 2021'},
  {title: 'Article Five', subtitle: 'September 9, 2021'}
]

export const BlogView = () => {
  return (
    <>
      <Content className="content_top">
        <div className="section">
          <p><b>Blog</b></p>
        </div>
      </Content>
      {data.map((item, index) => (
        <Content className="content" key={index}>
          <div className="section">
            <h1>{item.title}</h1>
            <h4>{item.subtitle}</h4>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dmmy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specien book.
            </h3>
            <Button danger style={{float: 'right', marginTop: '30px'}}>Read more</Button>
          </div>
        </Content>
      ))}
    </>
  )
}
