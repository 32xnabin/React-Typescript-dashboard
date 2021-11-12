import { Card, Typography, CardContent, IconButton } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridContainer } from './Common.style';
import styled from 'styled-components';
const Section9: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    width: 100%;

    height: 20px;
    padding: 6px;

    color: #fff;
    margin: 8px 8px;
  `;
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;

    color: #fff;
  `;

  return (
    <Card style={{ height: '1000px' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#fff', fontSize: 18 }}
          noWrap
        >
          Activity Feed
        </Typography>

        <Typography
          style={{ marginLeft: 8, color: '#fff', fontSize: 14, marginTop: 10 }}
          noWrap
        >
          21/10/2021
        </Typography>

        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              Complete inspection Daily Inspection (7148) - Demo Manager
            </Typography>
          </SubRow>
        </Row>
      </GridContainer>
    </Card>
  );
};

export default Section9;
