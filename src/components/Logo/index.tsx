import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo1 from './Logo.png';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        
        margin: 10px auto;
`
);

function Logo() {
  return (
    <LogoWrapper>
      <img style={{ height: '30px', width: 'auto' }} src={Logo1} alt="logo" />
    </LogoWrapper>
  );
}

export default Logo;
