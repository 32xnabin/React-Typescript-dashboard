import { FC, ReactNode } from 'react'
import { experimentalStyled } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Header from './Header'

interface SidebarLayoutProps {
  children?: ReactNode
}

const MainWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 1000px;
        
`,
)

const MainContent = experimentalStyled(Box)(
  ({ theme }) => `
       margin-top: ${theme.header.height}; 
       display:flex;
       width:100%;
        
`,
)

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
      <MainWrapper>
        <Header />
        <MainContent>
          <Sidebar />
          <Outlet />
        </MainContent>
      </MainWrapper>
    </>
  )
}

export default SidebarLayout
