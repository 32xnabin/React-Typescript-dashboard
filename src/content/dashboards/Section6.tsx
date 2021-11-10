import { Card, Typography } from '@material-ui/core';

import { GridContainer } from './Common.style';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Section6: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 6px;
    color: #fff;
    margin: 4px 8px;
  `;
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 40px;
    color: #fff;
  `;

  return (
    <Card style={{ padding: 10, height: '400px' }}>
      <GridContainer>
        <Typography
          style={{
            marginLeft: 8,
            marginBottom: 10,
            color: '#000',
            fontSize: 16,
          }}
          noWrap
        >
          Building Summary
        </Typography>
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
                marginLeft: 8,
                color: '#000',
                fontSize: 12,
              }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
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
              style={{ marginLeft: 8, color: '#000', fontSize: 12 }}
              noWrap
            >
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              padding: 6,
              color: '#fff',
              background: '#45c67b',
              borderRadius: 8,
              fontSize: 10,
            }}
            noWrap
          >
            11
          </Typography>
        </Row>
      </GridContainer>
    </Card>
  );
};

export default Section6;
