import { Layout, Col, Row, Button, Image } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import useWindowDimensions from '../../utils/layout';

const { Content } = Layout

export const LandingView = () => {
  const { width } = useWindowDimensions();

  return (
    <Content>
      {width > 992 ? (
        <>
          <div className="content" style={{
            backgroundImage: "url('./img/banner1.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <div className="section">
              <Row>
                <Col span={12} style={{
                  marginTop: '30px'
                }}>
                  <h1 className="title">Easily</h1>
                  <h1 className="title">Create Your</h1>
                  <h1 className="title">NFTs on Solana</h1>
                  <h3>Join the thousands of artists currency using solaminer to upload their NFTs to the blockchain</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
                <Col span={12} className="pic">
                  <Image src="./img/mint.png" preview={false} />
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <Row>
                <Col span={12}>
                  <h1>Minting Made Easy</h1>
                  <h3>You shouldn't have to struggle minting Solana NFTs. On Solaminter your NFT is moments away from being on the blockchain.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
                <Col span={12} className="pic">
                  <Image src="./img/NFT.png" preview={false} />
                </Col>
              </Row>
            </div>
          </div>
          <div className="content_control">
            <div className="section_control">
              <Row>
                <Col span={12} className="pic">
                  <Image src="./img/Take Control.png" preview={false} />
                </Col>
                <Col span={12}>
                  <h1>Take Control</h1>
                  <h3>Unlike other minting platforms that try to trap your NFTs, Solaminter uploads directly to your wallet. Now
                      it's your choice which marketplace you want to upload to. Take control of your NFT strategy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <Row>
                <Col span={12}>
                  <h1>Our Philosophy</h1>
                  <h3>We don't collect personal information from you. We will never ask you to "sign up" or ask for sensitive personal data. Enjoy your autonomy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
                <Col span={12} className="pic">
                  <Image src="./img/Privacy Lock.png" preview={false} />
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="content" style={{ overflow: 'scroll',
            backgroundImage: "url('./img/banner1.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <div className="section">
              <Row>
                <Col span={24} style={{
                  marginTop: '30px'
                }}>
                  <h1 className="title">Easily</h1>
                  <h1 className="title">Create Your</h1>
                  <h1 className="title">NFTs on Solana</h1>
                  <h3>Join the thousands of artists currency using solaminer to upload their NFTs to the blockchain</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <Row>
                <Col span={24} className="pic">
                  <Image src="./img/NFT.png" preview={false} />
                </Col>
                <Col span={24}>
                  <h1>Minting Made Easy</h1>
                  <h3>You shouldn't have to struggle minting Solana NFTs. On Solaminter your NFT is moments away from being on the blockchain.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content_control">
            <div className="section_control">
              <Row>
                <Col span={24} className="pic">
                  <Image src="./img/Take Control.png" preview={false} />
                </Col>
                <Col span={24}>
                  <h1>Take Control</h1>
                  <h3>Unlike other minting platforms that try to trap your NFTs, Solaminter uploads directly to your wallet. Now
                      it's your choice which marketplace you want to upload to. Take control of your NFT strategy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <Row>
                <Col span={24} className="pic">
                  <Image src="./img/Privacy Lock.png" preview={false} />
                </Col>
                <Col span={24}>
                  <h1>Our Philosophy</h1>
                  <h3>We don't collect personal information from you. We will never ask you to "sign up" or ask for sensitive personal data. Enjoy your autonomy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </Content>
  );
};
