import { Box } from '@material-ui/core'
import { Helmet } from 'react-helmet-async'

import { experimentalStyled } from '@material-ui/core/styles'

import Logo from 'src/components/Logo'
import Login from './Login'
import BG from '../BG.jpg'

const OverviewWrapper = experimentalStyled(Box)(
  () => `
    overflow: auto;
    display:flex;
    justify-content:center;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
    height: 100%
`,
)

const AuthContainer = experimentalStyled(Box)(
  () => `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: #10101082;
    margin: 0px auto;
    padding:20px;

`,
)

function Overview() {
  return (
    <OverviewWrapper
      style={{ backgroundImage: 'url(' + BG + ')', backgroundSize: 'cover' }}
    >
      <Helmet>
        <title>Login to MYBOS</title>
      </Helmet>
      <AuthContainer>
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Login />
      </AuthContainer>
    </OverviewWrapper>
  )
}

export default Overview
