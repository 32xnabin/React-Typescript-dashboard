import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Image from './sidebarImage.jpg';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
  margin: 20px auto;
`
);

function SideBarImage() {
  return (
    <LogoWrapper>
      <img
        style={{ height: '120px', width: 'auto' }}
        src={Image}
        alt="sidebar"
      />
    </LogoWrapper>
  );
}

export default SideBarImage;
