import { Grid } from '@material-ui/core';

import Section7 from './Section7';
import Section8 from './Section8';

const WatchList3: React.FC = () => {
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
          <Section7 />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Section8 />
        </Grid>
      </Grid>
    </>
  );
};

export default WatchList3;
