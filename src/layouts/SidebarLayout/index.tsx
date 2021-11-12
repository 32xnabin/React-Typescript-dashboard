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
       background:#ebeff3;
       margin-left:318px;
       margin-top:66px;
        
`
);

const MainContentSmall = experimentalStyled(Box)(
  ({ theme }) => `
       
       display:flex;
       background:#ebeff3;
       padding: 0 20px 0 86px;
       width:100%;
      box-sizing: border-box;
       margin-top:66px;
       > div {
        width:100%;

       }
        
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
