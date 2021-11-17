import { Typography,Button } from '@material-ui/core';

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 6px;
`;

export const WhiteLabel = styled(Typography)`
  font-size: 30px;
  color: rgba(58, 58, 58, 1);
  line-height: normal;
`;
export const NewButton = styled(Link)`
  color: #fff;
  background: #4fadea;
  padding: 6px 40px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background: #0087de;
  }
`;

export const ActionButton = styled(({ background, visible, ...otherProps }) => (
  <Button {...otherProps} />
))`
   width:'
`;