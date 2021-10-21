
import {
  Grid,
 
} from '@material-ui/core';


import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'   



function WatchList3() {

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
              <Section7 />
            </Grid>
            <Grid item lg={4} xs={12}>
              <Section8 />
            </Grid>
            <Grid item lg={4} xs={12}>
              <Section9 />
            </Grid>
         
        
      </Grid>
    </>
  );
}

export default WatchList3;
