import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Image from './sidebarImage.jpg';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
`
);

function SideBarImage() {
  return (
    <LogoWrapper>
      <img
        style={{ height: '120px', width: 'auto', marginLeft: '10px' }}
        src={Image}
        alt="sidebar"
      />
    </LogoWrapper>
  );
}

export default SideBarImage;
