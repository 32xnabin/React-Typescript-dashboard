import { Box } from '@material-ui/core'
import { experimentalStyled } from '@material-ui/core/styles'
import Logo1 from './Logo.png'

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
       
        background-color: #336799;
        padding:4px;
`,
)

function Logo() {
  return (
    <LogoWrapper>
      <img src={Logo1} alt="logo" />
    </LogoWrapper>
  )
}

export default Logo
