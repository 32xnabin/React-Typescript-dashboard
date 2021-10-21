import { Box, Container, Card } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';

import { experimentalStyled } from '@material-ui/core/styles';

import Logo from "src/components/Logo";
import Login from './Reset';
import BG from "../BG.jpg";


const OverviewWrapper = experimentalStyled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {

  return (
    <OverviewWrapper style={{ backgroundImage: 'url(' + BG + ')', backgroundSize: 'cover' }}>
      <Helmet>
        <title>Login to MYBOS</title>
      </Helmet>
      <Container style={{background:"#ABEEE",marginTop:100,}} maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
          <Login />
        
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
