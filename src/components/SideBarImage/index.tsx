import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import Image from './Location-image.png';

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
  padding: 0px 22px;
`
);

function SideBarImage() {
  return (
    <LogoWrapper className="location-image">
      <img        
        src={Image}
        alt="sidebar"
      />
    </LogoWrapper>
  );
}

export default SideBarImage;
