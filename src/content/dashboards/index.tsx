import { Grid, Card, Typography } from '@material-ui/core';

import WatchList1 from './WatchList1';
import WatchList2 from './WatchList2';
import WatchList3 from './WatchList3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  padding: 20px 10px;
  color: #817d7d;
  width: 100%;
`;

const DashboardCrypto: React.FC = () => {
  return (
    <>
      <div
        style={{
          marginTop: 20,
          padding: '8px',
          border: '1px solid #eee',
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <div style={{ width: '900px', margin: '8px' }}>
          <Grid container direction="row" justifyContent="start" spacing={1}>
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
        </div>
        <div>
          <Card
            style={{
              width: '400px',
              height: '1200px',
              margin: '8px',
              padding: 10,
            }}
          >
            <SubRow>
              <Typography style={{ fontSize: 16 }}>What's New</Typography>
              <FontAwesomeIcon
                style={{
                  color: '#817d7d',
                  background: '#fff',
                }}
                color="white"
                fontSize={8}
                icon={faTimes}
              />
            </SubRow>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <SubRow>
              <Typography style={{ fontSize: 14 }}>Gathering</Typography>
              <Typography style={{ fontSize: 12, color: '#ccc' }}>
                2021/02/02
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12, color: '#817d7d', margin: 6 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardCrypto;
