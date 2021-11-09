import { Grid } from '@material-ui/core';

import Section1 from './Section1';
import Section2 from './Section2';

const WatchList1: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={6} xs={12}>
          <Section1 />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Section2 />
        </Grid>
      </Grid>
    </>
  );
};

export default WatchList1;
