import React from 'react';
import { Card, Typography } from '@material-ui/core';

import { GridContainer } from './Common.style';
import styled from 'styled-components';
const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  width: 100%;

  height: 60px;
  padding: 6px;
  color: #000;
  margin: 8px 8px;
`;
const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;

  color: #000;
`;
const InputFilter = styled(({ color, ...otherProps }) => (
  <input {...otherProps} />
))`
  width: 99%;
  height: 35px;
  border: 1px solid #ccc;
  margin-left: 5px;
`;

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
    <Card style={{ padding: 10, height: '400px' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#000', fontSize: 18 }}
          noWrap
        >
          Important Phone numbers
        </Typography>
        <InputFilter
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        ></InputFilter>

        {filteredArray.map((item, index) => (
          <Row key={index}>
            <SubRow>
              <Typography style={{ marginLeft: 8, fontSize: 18 }} noWrap>
                {item}
              </Typography>
              <Typography
                style={{ marginLeft: 8, fontSize: 16, color: '#45a7c1' }}
                noWrap
              >
                {numbers[index]}
              </Typography>
              <input type="checkbox" />
            </SubRow>
          </Row>
        ))}
      </GridContainer>
    </Card>
  );
};

export default Section8;
