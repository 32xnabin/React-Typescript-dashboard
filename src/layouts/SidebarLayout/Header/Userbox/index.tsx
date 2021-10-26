import { useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'

import {
  Box,
  Button,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from '@material-ui/core'

import { experimentalStyled } from '@material-ui/core/styles'
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone'
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone'
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone'

const UserBoxButton = experimentalStyled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`,
)

const UserBoxText = experimentalStyled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`,
)

const UserBoxLabel = experimentalStyled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`,
)

function HeaderUserbox() {
  const ref = useRef<any>(null)
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel style={{ color: '#fff' }} variant="body1">
              Demo Manager
            </UserBoxLabel>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon style={{ color: '#fff' }} sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component="nav">
          <ListItem button to="#" component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem button to="/login" component={NavLink}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem button to="#" component={NavLink}></ListItem>
        </List>
        <Divider />
      </Popover>
    </>
  )
}

export default HeaderUserbox
