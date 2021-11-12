import { Card, Typography, CardContent, IconButton } from '@material-ui/core';

import { GridContainer } from './Common.style';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Section3: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: #fff;
    color: #000;
    border-top:1px solid #EBEBEB;
  `;
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    color: #3A3A3A;
  `;

  return (
    <Card>
      <CardContent>
      <div className="card-header">
        <Typography variant="h3" component="div">
          Items Requiring Action
        </Typography>
        <div className="card-header-action">
        <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>
      <GridContainer color={'f04547'}>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={16} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            43
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            32
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            15
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            09
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            70
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            711
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            07
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            22
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="#828282" fontSize={8} icon={faWrench} />
            <Typography style={{ marginLeft: 32 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#f04547',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            00
          </Typography>
        </Row>
      </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Section3;
