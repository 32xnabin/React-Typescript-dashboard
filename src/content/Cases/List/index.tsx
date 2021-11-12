import { Helmet } from 'react-helmet-async';

import { Grid } from '@material-ui/core';
import { BlueHeader, WhiteLabel, HorDiv } from './CaseTable.style';
import { NewButton } from './CaseTable.style';

import RecentOrders from './Cases';

function ApplicationsTransactions() {
  return (
    <>
      <div
        style={{
          marginTop: '27px',
          paddingRight: '0px',
          marginBottom: '60px',
          width: '90%',
        }}
      >
        <Grid container columns={1}>
          <Helmet>
            <title>MYBOS - Cases</title>
          </Helmet>
          <div
            style={{
              border: 'none',
              width: '100%',
              minHeight: '800px',
            }}
          >
            <BlueHeader>
              <WhiteLabel>Cases</WhiteLabel>
              <HorDiv>
                <NewButton to="/bm/cases/create">New Case</NewButton>
              </HorDiv>
            </BlueHeader>
            <Grid
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <div
                  style={{
                    border: '1px solid #eee',
                    borderRadius: '6px',
                    background: '#fff',
                  }}
                >
                  <RecentOrders />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default ApplicationsTransactions;
