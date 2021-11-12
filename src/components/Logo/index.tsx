import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo1 from './logo.svg';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        
        margin: 0px auto;
`
);

function Logo() {
  return (
    <LogoWrapper>
      <img style={{ height: '40px', width: 'auto' }} src={Logo1} alt="logo" />
    </LogoWrapper>
  );
}

export default Logo;
