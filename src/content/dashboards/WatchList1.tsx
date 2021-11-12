import { Grid } from '@material-ui/core';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const WatchList1: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        className="dashboard-grid"
      >
        <Grid item md={4} xs={12}>
          <Section1 />
        </Grid>
        <Grid item md={4} xs={12}>
          <Section2 />
        </Grid>
        <Grid item md={4} xs={12}>
          <Section3 />
        </Grid>
      </Grid>
    </>
  );
};

export default WatchList1;
