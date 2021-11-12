import { Layout, Col, Row, Button, Image } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { useWallet } from '@solana/wallet-adapter-react';
import { LandingView } from './landing';
import { SetupView } from './setup';

const { Content } = Layout

export const HomeView = () => {

  const { store } = useMeta();
  const wallet = useWallet();  
  return (
    <>
      {store && wallet ? (
        <LandingView />
      ) : (        
        <SetupView />
      )}
    </>
  );
};
