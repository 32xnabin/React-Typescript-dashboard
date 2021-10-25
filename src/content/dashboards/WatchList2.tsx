import { Grid } from '@material-ui/core'

import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

const WatchList2: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={4} xs={12}>
          <Section4 />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Section5 />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Section6 />
        </Grid>
      </Grid>
    </>
  )
}

export default WatchList2
