import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Logo from 'src/components/Logo';
import SidebarImage from 'src/components/SideBarImage';

import { Box, Drawer, Hidden } from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        border: 1px solid #000;
        background: ${theme.sidebar.background};
        height: 100%;
        overflow:hidden;
        height: 1000px;
        position: fixed;

        background-color: #10274b;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
        }
`
);

const TopSection = experimentalStyled(Box)(
  ({ theme }) => `
        display: flex;
        flex-direction:column;
        height: 120px;
        align-items: top;
        padding: 5px;
        margin-bottom:100px;
        
       
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Box display="flex" alignItems="center">
                <Logo />
              </Box>
              <SidebarImage />
            </TopSection>
            <SidebarMenu />
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <Logo />
              </TopSection>
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
