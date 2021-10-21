import { Box, Button, TextField, Typography } from '@material-ui/core'

import styled from 'styled-components'

export const StyledDivSmall = styled(
  ({ disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  ),
)`
  background-color: #5faee3;
  color: #${(props) => props.color};
  height: 25px;
  cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
  pointer-events: auto;
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px;
`
export const Holder = styled(({ color, ...otherProps }) => (
  <div {...otherProps} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  padding: 6px;
  background-color: #fff;
`

export const GridContainer = styled(({ color, ...otherProps }) => (
  <div {...otherProps} />
))`
  display: grid;
  grid-template-columns: 5% 60% 35%;
  grid-gap: 5px;
  margin: 5px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #${(props) => props.color};
`
