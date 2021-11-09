import { FC, ReactNode } from 'react';
import { experimentalStyled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
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
       min-height: 2000px; 
       margin-left:300px;
       margin-top:88px;
        
`
);

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
      <MainWrapper>
        <Sidebar />
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainWrapper>
    </>
  );
};

export default SidebarLayout;
