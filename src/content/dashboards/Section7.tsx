import React from 'react';
import { Card, Typography, CardContent, IconButton } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridContainer } from './Common.style';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import CheckedIcon from '../../components/ThinSquare/CheckedIcon';
import UncheckedIcon from '../../components/ThinSquare/UncheckedIcon';

const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  background-color: #fff;
  color: #000;
  border-top: 1px solid #ebebeb;
  min-width: 350px;
`;
const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  color: #3a3a3a;
  width: 100%;
`;

const Section7: React.FC = () => {
  const items = [
    'Karmela Francia - 24/06/2021',
    'Karmela Francia - 24/06/2021',
    'Karmela Francia - 24/06/2021',
    'Lorem ipsum- 24/06/2021',
    'RLorem ipsum- 24/06/2021',
  ];
  const [filterText, setFilterText] = React.useState('');
  const [filteredArray, setFilteredArray] = React.useState(items);

  React.useEffect(() => {}, []);

  const onFilterTextChange = (text: string) => {
    setFilterText(text);
    if (text !== '') {
      setFilteredArray(
        items.filter((item) =>
          item.toUpperCase().startsWith(text.toUpperCase())
        )
      );
    } else {
      setFilteredArray(items);
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="card-header">
          <Typography variant="h3" component="div">
            Notes
          </Typography>
          <div className="card-header-action">
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
          <Paper component="form" className="card-search-form">
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z"
                  fill="#828282"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9433 15.9433C16.3338 15.5528 16.967 15.5528 17.3575 15.9433L21.7075 20.2933C22.098 20.6838 22.098 21.317 21.7075 21.7075C21.317 22.098 20.6838 22.098 20.2933 21.7075L15.9433 17.3575C15.5528 16.967 15.5528 16.3338 15.9433 15.9433Z"
                  fill="#828282"
                />
              </svg>
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search notes"
              inputProps={{ 'aria-label': 'Search notes' }}
              value={filterText}
              onChange={(e) => onFilterTextChange(e.target.value)}
            />
          </Paper>
        </div>
        <GridContainer>
          {/* <InputFilter
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        ></InputFilter> */}

          {filteredArray.map((item, index) => (
            <Row key={index}>
              <SubRow>
                <Typography style={{ fontSize: 14, fontWeight: 'bold' }} noWrap>
                  {item}
                  <Typography
                    style={{ marginTop: '10px', fontSize: 14 }}
                    noWrap
                  >
                    Check recyclables area
                  </Typography>
                </Typography>
                <Checkbox
                  icon={<UncheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  style={{ width: '20px', height: '20px', marginLeft: 'auto' }}
                />
              </SubRow>
            </Row>
          ))}
        </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Section7;
