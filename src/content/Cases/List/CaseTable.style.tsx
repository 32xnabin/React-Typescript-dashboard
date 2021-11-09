import { Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const DropDown = styled.select`
  width: 450px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  .MuiInputBase-input {
    font-size: 14px;
    line-height: 1.1875em;
    color: #918e8e;
  }
  color: #918e8e;
`;
export const HorDiv = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 10px;
`;

export const TableHeader = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;
export const BlueHeader = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 6px;
`;

export const WhiteLabel = styled(Typography)`
  font-size: 16px;
  color: #000;
  margin-left: 5px;
`;
export const NewButton = styled(Link)`
  color: #fff;
  background: #5faee3;
  padding: 6px 40px;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
