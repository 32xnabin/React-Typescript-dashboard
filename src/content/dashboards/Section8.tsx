import React from 'react';
import {
  Card,
  Typography,
  Checkbox,
  CardContent,
  IconButton,
} from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridContainer } from './Common.style';
import CheckedIcon from '../../components/ThinSquare/CheckedIcon';
import UncheckedIcon from '../../components/ThinSquare/UncheckedIcon';
import InputBase from '@mui/material/InputBase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Section8: React.FC = () => {
  const names = [
    'Karmela Francia',
    'Karmela Francia',
    'Karmela Francia',
    'Lorem ipsum',
    'RLorem ipsum',
  ];
  const numbers = ['44444', '345435355', '4365476', '456534654365', '45645656'];
  const [filterText, setFilterText] = React.useState('');
  const [filteredArray, setFilteredArray] = React.useState(names);

  React.useEffect(() => {}, []);

  const onFilterTextChange = (text: string) => {
    setFilterText(text);
    if (text !== '') {
      setFilteredArray(
        names.filter((item) =>
          item.toUpperCase().startsWith(text.toUpperCase())
        )
      );
    } else {
      setFilteredArray(names);
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="card-header">
          <Typography variant="h3" component="div">
            Important Phone numbers
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
              placeholder="Search phone numbers"
              inputProps={{ 'aria-label': 'Search phone numbers' }}
              value={filterText}
              onChange={(e) => onFilterTextChange(e.target.value)}
            />
          </Paper>
        </div>
        <GridContainer>
          <TableContainer component={Paper} className="table-phone-number">
            <Table aria-label="phone number table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell align="right">&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredArray.map((item, index) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item}
                    </TableCell>
                    <TableCell className="phone-number">
                      {numbers[index]}
                    </TableCell>
                    <TableCell align="right">
                      <Checkbox
                        icon={<UncheckedIcon />}
                        checkedIcon={<CheckedIcon />}
                        style={{
                          width: '20px',
                          height: '20px',
                          marginLeft: 'auto',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/*{filteredArray.map((item, index) => (
          <Row key={index}>
            <SubRow>
              <Typography style={{ marginLeft: 8, fontSize: 14 }} noWrap>
                {item}
              </Typography>
              <Typography
                style={{ marginLeft: 8, fontSize: 10, color: '#45a7c1' }}
                noWrap
              >
                {numbers[index]}
              </Typography>
              <Checkbox
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                style={{ width: '20px', height: '20px', marginLeft: 'auto' }}
              />
            </SubRow>
          </Row>
        ))} */}
        </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Section8;
