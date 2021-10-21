import { Box, Button, TextField, Typography } from '@material-ui/core'

import styled from 'styled-components'

export const WhiteLabel = styled(Typography)`
  font-size: 14px;

  margin-left: 5px;
`

export const HeadingLabel = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  margin-right: 130px;
  text-align: left;
  color: #5faee3;
`

export const InputField = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  width: 450px;

  border-radius: 4px;

  -moz-appearance: textfield;

  .MuiInputBase-input {
    background: #fff;
    border-radius: 4px;
  }
  padding-left: 5px;
`
