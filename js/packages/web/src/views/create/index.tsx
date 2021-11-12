import React from 'react';
import {Layout, Row, Col, Button, Upload, message, Form, Input, Tooltip } from 'antd';
import { InboxOutlined, QuestionCircleOutlined } from '@ant-design/icons';
// import 'react-dropzone-uploader/dist/styles.css'

const { Content } = Layout;
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export const CreateView = () => {
  return (
    <>
      <Content className="content_top">
        <div className="section">
          <p><b>NFT Creator</b></p>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h3>Upload File</h3>
          <h4>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, OGG, GLB, GLTF. Max size: 40MB</h4>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Drag & drop file
            </p>
          </Dragger>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h3>Name</h3>
          <Input placeholder='e.g. "Fuzzy Panda#225"' />
        </div>
        <div className="section">
          <h3>Description</h3>
          <Input.TextArea placeholder="e.g. 'Fuzzy Panda's is a series of 10,000 algorithmically generated Panda's...''" />
        </div>
        <div className="section">
          <h3>Seller Fee</h3>
          <Input placeholder="Royalties on secondary sales(%), use a whole number between 0 and 100" />
        </div>
        <div className="section">
          <h3>
            Properties&nbsp;
            <Tooltip title="Properties are traits that make your NFT special and/or unique. This field is optional. Feel free to leave it blank.">
              <QuestionCircleOutlined style={{fontSize: '10px'}} />
            </Tooltip>
          </h3>
            <Row>
              <Col span={11}>
                  <Input placeholder="e.g. Color" />
              </Col>
              <Col offset={2} span={11}>
                <Input placeholder="e.g. Red" />
              </Col>
            </Row>
            <Button type="primary" size="large" className="submit">Submit</Button>
        </div>
      </Content>
    </>
  )
}
