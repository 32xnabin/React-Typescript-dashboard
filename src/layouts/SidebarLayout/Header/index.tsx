import { useContext } from 'react'

import { Box, Hidden, IconButton, Tooltip } from '@material-ui/core'
import { experimentalStyled } from '@material-ui/core/styles'
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone'
import { SidebarContext } from 'src/contexts/SidebarContext'
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone'

import Logo from 'src/components/Logo'
import HeaderUserbox from './Userbox'

const HeaderWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: #336799;
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: 0;
            width: auto;
        }
`,
)

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <Logo />
      </Box>
      <Box display="flex" alignItems="center">
        <HeaderUserbox />

        <Hidden lgUp>
          <Tooltip arrow title="Search">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Hidden>
      </Box>
    </HeaderWrapper>
  )
}

export default Header
