import { Helmet } from 'react-helmet-async'

import { Grid } from '@material-ui/core'
import { BlueHeader, WhiteLabel, HorDiv } from './CaseTable.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import RecentOrders from './Cases'

function ApplicationsTransactions() {
  return (
    <>
      <Grid container columns={1}>
        <Helmet>
          <title>MYBOS - Cases</title>
        </Helmet>
        <div
          style={{
            marginTop: 20,
            border: '1px solid #eee',
            width: '95%',
            marginLeft: 8,
            marginRight: 8,
          }}
        >
          <BlueHeader>
            <WhiteLabel>Cases</WhiteLabel>
            <HorDiv style={{ visibility: 'hidden' }}>
              <FontAwesomeIcon color="white" icon={faPrint} />
              <FontAwesomeIcon color="white" icon={faCog} />
            </HorDiv>
          </BlueHeader>
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <RecentOrders />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  )
}

export default ApplicationsTransactions
