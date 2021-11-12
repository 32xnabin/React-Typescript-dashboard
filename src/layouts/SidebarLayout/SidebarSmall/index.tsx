import { Scrollbars } from 'react-custom-scrollbars-2';
import { Box } from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        width:66px;
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        height: 100%;
        overflow:hidden;
        height: 1000px;
        position: fixed;
        z-index: 9;
        background-color: #10274b;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
        }
`
);

const TopSection = experimentalStyled(Box)(
  ({ theme }) => `
        display: flex;
        flex-direction:column;
        height: 130px;
        align-items: top;
        padding: 5px;
        margin-bottom:60px;
        
       
`
);

function Sidebar() {
  return (
    <SidebarWrapper>
      <Scrollbars autoHide>
        <TopSection />
        <SidebarMenu />
      </Scrollbars>
    </SidebarWrapper>
  );
}

export default Sidebar;
