import { Grid } from '@material-ui/core';

import WatchList1 from './WatchList1';
import WatchList2 from './WatchList2';
import WatchList3 from './WatchList3';

const DashboardCrypto: React.FC = () => {
  return (
    <>
      <div
        style={{
          marginTop: 20,
          border: '1px solid #eee',
          width: '95%',
          marginLeft: 8,
          marginRight: 8,
        }}
      >
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
        </Grid>
      </div>
    </>
  );
};

export default DashboardCrypto;
