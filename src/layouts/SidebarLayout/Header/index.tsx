import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import HeaderUserbox from './Userbox';

const HeaderWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 0)};
        right: 0;
        z-index: 8;
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
      {/* <Box
        display="flex"
        alignItems="center"
        style={{ marginLeft: '100px', height: '95px' }}
      >
        <Hidden lgUp>
          <Logo />
        </Hidden>
      </Box> */}
      <Box
        display="flex"
        alignItems="center"
        style={{ marginRight: '37px', marginLeft: 'auto' }}
      >
        <HeaderUserbox />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
