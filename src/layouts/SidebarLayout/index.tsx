import { FC, ReactNode } from 'react';
import { experimentalStyled } from '@material-ui/core/styles';
import { Outlet } from 'react-router-dom';
import { Box, Hidden } from '@material-ui/core';

import Sidebar from './Sidebar';
import SidebarSmall from './SidebarSmall';
import Header from './Header';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        background:#ebeff3;
       
        
`
);

const MainContent = experimentalStyled(Box)(
  ({ theme }) => `
       
       display:flex;
       width:100%;
       background:#ebeff3;
       margin-left:300px;
       margin-top:88px;
        
`
);

const MainContentSmall = experimentalStyled(Box)(
  ({ theme }) => `
       
       display:flex;
       width:100%;
       background:#ebeff3;
       margin-left:100px;
       margin-top:88px;
        
`
);

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
      <MainWrapper>
        <Hidden lgUp>
          <SidebarSmall />
        </Hidden>
        <Hidden lgDown>
          <Sidebar />
        </Hidden>
        <Header />
        <Hidden lgDown>
          <MainContent>
            <Outlet />
          </MainContent>
        </Hidden>
        <Hidden lgUp>
          <MainContentSmall>
            <Outlet />
          </MainContentSmall>
        </Hidden>
      </MainWrapper>
    </>
  );
};

export default SidebarLayout;
