import { Helmet } from 'react-helmet-async'
import PageHeader from './PageHeader'
import { Container, Grid } from '@material-ui/core'

import RecentOrders from './Cases'

function ApplicationsTransactions() {
  return (
    <>
      <Grid container columns={1}>
        <Helmet>
          <title>MYBOS - Cases</title>
        </Helmet>

        <Container maxWidth="lg">
          <PageHeader />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <RecentOrders />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default ApplicationsTransactions
