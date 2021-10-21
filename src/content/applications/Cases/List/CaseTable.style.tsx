import { Box, Button, TextField, Typography } from '@material-ui/core'

import styled from 'styled-components'

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
`
export const HorDiv = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 10px;
`

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
`
