import React from 'react';
import {Layout, Row, Col, Button, Image} from 'antd';

const { Content } = Layout;

export const FaqView = () => {
  return (
    <>
      <Content className="content_top">
        <div className="section">
          <p><b>FAQ</b></p>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h1>What is an NFT?</h1>
          <h3>
            A non-fungible token is a unit of data stored on the blockchain and is certified to be unique and
            not interchangeable. NFTs can be used to represent intellectural property and other assets like photos,
            videos, audio and other types of digital files. NFTs are a way to establish provenance and property
            rights on the internet.
          </h3>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h1>I thought Solana was free, why are there fees?</h1>
          <h3>
            To create an NFT there are various steps, we handle all of them for you on Solaminter. The first step
            in the NFT creation process is to create a token and an account that can recieve the token. The network
            demands that a minimum deposit of SOL be made to these two accounts. Network fees are required to prevent
            network spam and malicious activity. Arweave, the decentralized data storage platform used to host the
            visual element of your NFT requires a one-time payment to host on the network. Lastly, there is a small
            provider fee required to help the website sustain. All in all, Solaminter automates the integration of
            multiple websites and platforms, streamlining the NFT creation process for you.
          </h3>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h1>What are royalties?</h1>
          <h3>
            One of the major benefits of NFTs is that original creators, like you, are entitled to royalties.
            That means that every time someone resells your NFT, you get a percentage of that sale. So if you set
            the royalty to 10% and someone resells the NFT you created for $1,000 you get $100.
          </h3>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h1>Where are the NFT iamges stored?</h1>
          <h3>
            All images are stored on the Arweave protocal. Arweave is a decentralized file storage network that
            seeks to offer a platform for the indefinite storage data. Think about it like a decentralized and
            distributed version of Dropbox. The system utilizes a system of nodes to store and retrieve data.<br />
            Check out <a href="https://www.arweave.org">https://www.arweave.org/</a> for more information.
          </h3>
        </div>
      </Content>
      <Content className="content">
        <div className="section">
          <h1>I would like to upload a file bigger than 6mb. How can I do that?</h1>
          <h3>
            We unfortunately don't have the ability to do that at this time, you can try compressing your file
            using an online tool like <a href="https://squoosh.app">https://squoosh.app/</a>.
          </h3>
        </div>
      </Content>
      <Content className="content">
        <div className="section" style={{marginBottom: '40px'}}>
          <h1>I just minted my NFT, how do I send it to my friend?</h1>
          <h3>
            Refresh your browser and give your wallet a minute to receive your NFT. Your NFT should be listed
            in your wallet as a token. In some wallets like Phantom it will be listed as an NFT. Once you see your
            NFT in your wallet you can send it to a friend or upload it to a marketplace of your choice.
          </h3>
        </div>
      </Content>
    </>
  )
}
