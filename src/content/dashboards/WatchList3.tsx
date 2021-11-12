import { Grid } from '@material-ui/core';

import Section7 from './Section7';
import Section8 from './Section8';
import Section6 from './Section6';

const WatchList3: React.FC = () => {
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
          <Section7 />
        </Grid>
        <Grid item md={4} xs={12}>
          <Section8 />
        </Grid>
        <Grid item md={4} xs={12}>
          <Section6 />
        </Grid>
      </Grid>
    </>
  );
};

export default WatchList3;
