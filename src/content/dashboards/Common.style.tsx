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
export const Holder = styled(({ background, color, ...otherProps }) => (
  <div {...otherProps} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  padding: 2px;
  background-color: #${(props) => props.background};
`

export const ReactCalender = styled(({ color, ...otherProps }) => (
  <Calendar {...otherProps} />
))`
  background: #45a7c1 !important;
  .react-calendar__tile{
  color:#fff !important; 

  }
  .react-calendar__navigation__label{
  color:#fff !important; 

  }
  .react-calendar__tile--now{
    background-color: #36869d;
  }
  .react-calendar__month-view__weekdays {
    background-color: #36869d !important;
`

export const GridContainer = styled(({ color, ...otherProps }) => (
  <div {...otherProps} />
))`
  margin: 5px;
  height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #${(props) => props.color};
`
