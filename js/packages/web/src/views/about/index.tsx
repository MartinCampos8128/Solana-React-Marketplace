import React from 'react';
import {Layout, Row, Col, Button, Image} from 'antd';
import useWindowDimensions from '../../utils/layout';

const { Content } = Layout;

export const AboutView = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 992 ? (
        <>
          <Content className="content_top">
            <div className="section">
              <p><b>About</b></p>
            </div>
          </Content>
          <Content className="content">
            <div className="section">
              <Row className="pic-center">
                <Col span={17}>
                  <h1>What is Solaminter?</h1>
                  <h3>Solaminter is the first NFT minting website built on Solana that enables you to mint and take control of your NFTs. On other NFT
                    sites you are often forced to sell on the marketplace you minted your NFT on. This puts you at a disadvantage. Let's see why....
                  </h3>
                </Col>
                <Col span={6} offset={1} className="pic">
                  <Image src="./img/Logo1.png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
          <Content className="content">
            <div className="section">
              <Row className="pic-center">
                <Col span={17}>
                  <h1>Maximize Exposure and Impact</h1>
                  <h3>Solaminter enables you to optimize for maximum exposure. Strategicially executing an NFT launch across multiple platforms gives you
                    the opportunity to reach more people and have a greater impact. Paired with a good strategy, this tactic gives you the power to craft your
                    own creative plan and stand out amongst the rest of creators.
                  </h3>
                </Col>
                <Col span={6} offset={1} className="pic">
                  <Image src="./img/Exposure_Impact(1).png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
          <Content className="content">
            <div className="section">
              <Row className="pic-center">
                <Col span={17}>
                  <h1>Minimize Risk</h1>
                  <h3>Solaminter enables you to optimize for maximum exposure. Strategicially executing an NFT launch across multiple platforms gives you
                    the opportunity to reach more people and have a greater impact. Paired with a good strategy, this tactic gives you the power to craft your
                    own creative plan and stand out amongst the rest of creators.</h3>
                </Col>
                <Col span={6} offset={1} className="pic">
                  <Image src="./img/Minimize Risk.png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
          <Content className="content">
            <div className="section" style={{marginBottom: '60px'}}>
              <Row className="pic-center">
                <Col span={17}>
                  <h1>A/B Test to Success</h1>
                  <h3>By using Solaminter you are able to utilize the same A/B testing strategies used by major corporations like Google and Facebook. There
                    are various Solana NFT marketplaces popping up, noone knows which one will work best for your launch. By using Solaminter you can split
                    your NFT set into multiple subsets and spread the launch across multiple marketplaces, enabling you to collect the data needed to make
                    successful, well-informed future decisions.
                  </h3>
                </Col>
                <Col span={6} offset={1} className="pic">
                  <Image src="./img/A_B Test(1).png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
        </>
      ) : (
        <>
          <Content className="content_top">
            <div className="section">
              <p><b>About</b></p>
            </div>
          </Content>
          <Content className="content">
            <div className="section">
              <Row>
                <Col span={24}>
                  <h1>What is Solaminter?</h1>
                  <h3>Solaminter is the first NFT minting website built on Solana that enables you to mint and take control of your NFTs. On other NFT
                    sites you are often forced to sell on the marketplace you minted your NFT on. This puts you at a disadvantage. Let's see why....
                  </h3>
                </Col>
                <Col span={24} className="pic">
                  <Image src="./img/Logo1.png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
          <Content className="content">
            <div className="section">
              <Row>
                <Col span={24}>
                  <h1>Maximize Exposure and Impact</h1>
                  <h3>Solaminter enables you to optimize for maximum exposure. Strategicially executing an NFT launch across multiple platforms gives you
                    the opportunity to reach more people and have a greater impact. Paired with a good strategy, this tactic gives you the power to craft your
                    own creative plan and stand out amongst the rest of creators.
                  </h3>
                </Col>
                <Col span={24} className="pic">
                  <Image src="./img/Exposure_Impact(1).png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
          <Content className="content">
            <div className="section">
              <Row>
                <Col span={24}>
                  <h1>Minimize Risk</h1>
                  <h3>Solaminter enables you to optimize for maximum exposure. Strategicially executing an NFT launch across multiple platforms gives you
                    the opportunity to reach more people and have a greater impact. Paired with a good strategy, this tactic gives you the power to craft your
                    own creative plan and stand out amongst the rest of creators.</h3>
                </Col>
                <Col span={24} className="pic">
                  <Image src="./img/Minimize Risk.png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
          <Content className="content">
            <div className="section" style={{marginBottom: '60px'}}>
              <Row>
                <Col span={24}>
                  <h1>A/B Test to Success</h1>
                  <h3>By using Solaminter you are able to utilize the same A/B testing strategies used by major corporations like Google and Facebook. There
                    are various Solana NFT marketplaces popping up, noone knows which one will work best for your launch. By using Solaminter you can split
                    your NFT set into multiple subsets and spread the launch across multiple marketplaces, enabling you to collect the data needed to make
                    successful, well-informed future decisions.
                  </h3>
                </Col>
                <Col span={24} className="pic">
                  <Image src="./img/A_B Test(1).png" preview={false} />
                </Col>
              </Row>
            </div>
          </Content>
        </>
      )}
    </>
  )
}
