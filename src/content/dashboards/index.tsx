import { Container, Grid } from '@material-ui/core'

import WatchList1 from './WatchList1'
import WatchList2 from './WatchList2'
import WatchList3 from './WatchList3'

function DashboardCrypto() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <WatchList1 />
          </Grid>
          <Grid item xs={12}>
            <WatchList2 />
          </Grid>
          <Grid item xs={12}>
            <WatchList3 />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default DashboardCrypto
