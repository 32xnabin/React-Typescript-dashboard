import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { GridContainer } from './Common.style';
import styled from 'styled-components';
const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  width: 100%;

  align-items: center;
  margin-bottom: 10px;
`;
const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 25px;
  margin-left: 8px;

  color: #000;
`;

const Section5: React.FC = () => {
  const items = [
    'Karmela Francia - 24/06/2021',
    'Karmela Francia - 24/06/2021',
    'Karmela Francia - 24/06/2021',
    'Lorem ipsum- 24/06/2021',
    'RLorem ipsum- 24/06/2021',
  ];
  const colors = ['#45a7c1', '#f04547', '#45c67b', '#f04547', '#45a7c1'];

  React.useEffect(() => {}, []);

  return (
    <Card style={{ padding: 10, height: '400px' }}>
      <GridContainer>
        <Typography
          style={{
            marginLeft: 8,
            marginBottom: 10,
            color: '#000',
            fontSize: 14,
          }}
          noWrap
        >
          Management Reports Generated
        </Typography>

        {items.map((item, index) => (
          <Row key={index}>
            <SubRow>
              <FontAwesomeIcon
                style={{
                  color: colors[index],
                  background: '#fff',
                  padding: 1,
                  borderRadius: 2,
                }}
                color="white"
                fontSize={8}
                icon={faFilePdf}
              />
              <Typography style={{ fontSize: 12, marginLeft: '8px' }}>
                {item}
              </Typography>
            </SubRow>

            <SubRow>
              <Typography style={{ fontSize: 10, marginLeft: '16px' }} noWrap>
                Check recyclables area
              </Typography>
            </SubRow>
          </Row>
        ))}
      </GridContainer>
    </Card>
  );
};

export default Section5;
