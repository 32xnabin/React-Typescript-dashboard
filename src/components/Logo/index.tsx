import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo1 from './Logo.png';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        padding:4px;
`
);

function Logo() {
  return (
    <LogoWrapper>
      <img
        style={{ height: '30px', width: 'auto', marginLeft: '18px' }}
        src={Logo1}
        alt="logo"
      />
    </LogoWrapper>
  );
}

export default Logo;
