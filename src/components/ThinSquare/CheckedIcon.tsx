import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Checked from './checked.png';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        
        margin: 0px auto;
`
);

function CheckedIcon() {
  return (
    <LogoWrapper>
      <img style={{ height: '20px', width: '20px' }} src={Checked} alt="logo" />
    </LogoWrapper>
  );
}

export default CheckedIcon;
