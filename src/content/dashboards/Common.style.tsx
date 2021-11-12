import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import styled from 'styled-components';

export const StyledDivSmall = styled(
  ({ disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  )
)`
  background-color: #fff;
  color: #${(props) => props.color};
  height: 25px;
  cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
  pointer-events: auto;
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px;
`;
export const Holder = styled(({ background, color, ...otherProps }) => (
  <div {...otherProps} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

export const Holder1 = styled(({ background, color, ...otherProps }) => (
  <div {...otherProps} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  padding: 2px;
  background-color: #fff;
`;

export const ReactCalender = styled(({ color, ...otherProps }) => (
  <Calendar {...otherProps} />
))`
  background: #fff !important;
  border:none !important;
  .react-calendar__tile{
  color:#000 !important; 

  }
  .react-calendar__navigation__label{
  color:#000 !important; 

  }
  .react-calendar__tile--now{
    background-color: #45a7c1;
  }
  .react-calendar__month-view__weekdays {
    background-color: #fff !important;
`;

export const GridContainer = styled(({ color, ...otherProps }) => (
  <div {...otherProps} />
))`
  padding: 0;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  margin:0 -16px;
  height:calc(100% - 24px);
  .svg-inline--fa {
        font-size: 24px !important;
        maring-right:24px;
    }
`;
