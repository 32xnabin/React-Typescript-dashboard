import { Box, Button, TextField, Typography } from '@material-ui/core'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

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

export const ReactCalender = styled(({ color, ...otherProps }) => (
  <Calendar {...otherProps} />
))`
  background: #45a7c1;
  background-color: #45a7c1;
  color:#fff !important; 
  .react-calendar__tile{
  color:#fff !important; 

  }
  .react-calendar__tile--now{
    background-color: #36869d;
  }
  .react-calendar__month-view__weekdays {
    background-color: #36869d;
`

export const GridContainer = styled(({ color, ...otherProps }) => (
  <div {...otherProps} />
))`
  margin: 5px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #${(props) => props.color};
`
