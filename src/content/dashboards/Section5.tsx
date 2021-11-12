import React from 'react';
import { Card, Typography,CardContent, IconButton } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { GridContainer } from './Common.style';
import styled from 'styled-components';
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
              <Typography style={{ fontSize: 14, fontWeight:500, marginLeft: '12px' }}>
                {item}
                <Typography style={{ fontSize: 12 }} noWrap>
                Check recyclables area
              </Typography>
              </Typography>
            </SubRow>
          </Row>
        ))}
      </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Section5;
