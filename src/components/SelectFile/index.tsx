import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import SelectFile from './selectfile.png';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        
        margin: 0px auto;
`
);

function Logo() {
  return (
    <LogoWrapper>
      <img
        style={{ height: '20px', width: 'auto' }}
        src={SelectFile}
        alt="SelectFile"
      />
    </LogoWrapper>
  );
}

export default Logo;
