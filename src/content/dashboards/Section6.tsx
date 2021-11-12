import { Card, Typography, CardContent, IconButton } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridContainer } from './Common.style';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Section6: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #fff;
  color: #000;
  border-top:1px solid #EBEBEB;
  min-width: 350px;
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
        Management Reports Generated
        </Typography>
        <div className="card-header-action">
        <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>
      <GridContainer>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            00
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            33
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            12
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            42
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{
                marginLeft: 32
              }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
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
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            66
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            11
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#ccc',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={12}
              icon={faFilePdf}
            />
            <Typography
              style={{ marginLeft: 32 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 0,
              padding: '7px 10px',
              color: '#fff',
              background: '#39C67B',
              borderRadius: 8,
              fontSize: 12,
              fontWeight:'bold'
            }}
            noWrap
          >
            11
          </Typography>
        </Row>
      </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Section6;
