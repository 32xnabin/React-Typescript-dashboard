import { Box, Hidden } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';

import Logo from 'src/components/Logo';
import HeaderUserbox from './Userbox';

const HeaderWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 1;
        background-color: #fff;
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width:100%;
`
);

function Header() {
  return (
    <HeaderWrapper
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        style={{ marginLeft: '100px', height: '95px' }}
      >
        <Hidden lgUp>
          <Logo />
        </Hidden>
      </Box>
      <Box display="flex" alignItems="center" style={{ marginRight: '100px' }}>
        <HeaderUserbox />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
