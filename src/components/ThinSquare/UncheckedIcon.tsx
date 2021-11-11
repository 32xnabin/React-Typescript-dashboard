import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Unchecked from './unchecked.png';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        
        margin: 0px auto;
`
);

function UncheckedIcon() {
  return (
    <LogoWrapper>
      <img
        style={{ height: '20px', width: '20px' }}
        src={Unchecked}
        alt="logo"
      />
    </LogoWrapper>
  );
}

export default UncheckedIcon;
