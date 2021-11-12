import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu, Image } from 'antd';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { useMeta } from '../../contexts';
import { Solaminter_Owner_ID } from '../../utils/ids';

export const AppBar = () => {
  const wallet = useWallet();
  const {width} = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <>
          <Link to={`/`}>
            <Image className="logo" src="./img/logo.png" preview={false} />
          </Link>
          <div>
          <div style={{
                display: '-webkit-box',
              }}>
            <Link to={`/`}>
              <Button className="app-btn header-btn">Home</Button>
            </Link>
            <Link to={`/art/create`}>
              <Button className="app-btn header-btn">Create</Button>
            </Link>
            <Link to={`/about`}>
              <Button className="app-btn header-btn">About</Button>
            </Link>
            <Link to={`/blog`}>
              <Button className="app-btn header-btn">Blog</Button>
            </Link>            
            {wallet.publicKey && wallet.publicKey.toBase58() ==  Solaminter_Owner_ID.toBase58() ? (
              <Link to={'/admin'}>
                <Button className="app-btn header-btn">Dashboard</Button>
              </Link>
            ) : (
              <>
              </>
            )            
            }
            {wallet.connected ? (                    
            <div className="menu_items connect-btn">
              <CurrentUserBadge
                showBalance={false}
                showAddress={false}
                iconSize={24}
              />
            </div>              
            ) : (
              <ConnectButton type="primary" allowWalletChange />
            )}
            </div>
          </div>
        </>
      ) : (
        <>
          <Dropdown
            arrow
            placement="bottomLeft"
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item>
                  <Link to={`/`}>
                    <Button className="app-btn">Home</Button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`/create`}>
                    <Button className="app-btn">
                      Create
                    </Button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`/about`}>
                    <Button className="app-btn">About</Button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`/blog`}>
                    <Button className="app-btn">Blog</Button>
                  </Link>
                </Menu.Item>
                {wallet.publicKey && wallet.publicKey.toBase58() ==  Solaminter_Owner_ID.toBase58() ? (
                  <Menu.Item>
                    <Link to={'/admin'}>
                      <Button className="app-btn">Dashboard</Button>
                    </Link>
                  </Menu.Item>
                ) : (
                  <>
                  </>
                )            
            }
              </Menu>
            }
          >
            <MenuOutlined style={{ fontSize: '1.4rem' }} />
          </Dropdown>
          <Link to={`/`}>
            <Image className="logo" src="./img/logo.png" preview={false} />
          </Link>
          {wallet.connected ? (
            <div className="menu_items" style={{marginTop: '5px'}}>
              <CurrentUserBadge
                showBalance={false}
                showAddress={false}
                iconSize={24}
              />
            </div>
          ) : (
            <ConnectButton type="primary" allowWalletChange />
          )}
        </>
      )}

    </>
  );
};
