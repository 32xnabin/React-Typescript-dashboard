import { Box, Button, TextField, Typography } from '@material-ui/core';

import styled from 'styled-components';

export const SubmitButton = styled(({ visible, ...otherProps }) => (
  <Button {...otherProps} />
))`
  border: 1px solid red;
  border-radius: 11px;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  color: red;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

export const CreateCaseForm = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: 10px;
`;

export const InfoLabel = styled(({ bold, visible, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 8px 0px;
  color: #000;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const WhiteLabel = styled(Typography)`
  font-size: 30px;
  color: rgba(58, 58, 58, 1);
  line-height: normal;
  margin-left: 14px;
`;

export const HeadingLabel = styled(Typography)`
  font-size: 14px;
  text-align: left;
  margin-left: 10px;
  width: 100%;
  font-weight: 400;
  color: #000;
`;

export const HeadingLabel1 = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  margin-right: 200px;
  margin-top: 50px;
  text-align: left;
  color: #000;
  font-weight: 400;
`;

export const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 55% 44.5%;
  @media (max-width: 960px) {
    grid-template-columns: auto;
    width: 100%;
  }
  grid-gap: 10px;
`;

export const FullWidthContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  justify-content: start;
  padding: 20px;

  border: 1px solid #eee;

  border-radius: 6px;
  margin-bottom: 20px;
  background: #fff;
  overflow-x: auto;

  @media (max-width: 960px) {
    width: 100%;
  }
`;
export const FullWidthContainer1 = styled(Box)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;

  padding: 20px;

  border-radius: 6px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (max-width: 960px) {
    grid-template-columns: auto;
    width: 100%;
  }
`;

export const FileuploadContainer = styled(Box)`
  background: #fff;
  border-radius: 6px 6px 0px 0px;
  @media (min-width: 960px) {
    position: relative;
    top: -41px;
  }
`;
export const GridContainerHeader = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: start;
  padding: 10px;
  border: 1px solid #eee;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  background: #fff;
  overflow-x: auto;
  overflow-y: hidden;
  @media (max-width: 960px) {
    position: relative;
    top: 10px;
  }
`;
export const GridContainerHeader1 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: start;
  padding: 10px;
  border: 1px solid #eee;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  background: #fff;
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 960px) {
    position: relative;
    top: 10px;
    width: 100%;
  }
`;
export const SectionContainer = styled(Box)`
  background: #fff;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0px 0px 6px 6px;
  margin-bottom: 10px;
  padding: 15px 8px;
`;
export const SingleContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto;
  padding-left: 8px;
  width: 100%;
`;
export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 10px;
  padding: 6px;
  margin-right: 20px;
  border-radius: 0 0 6px 6px;

  background: #fff;

  @media (max-width: 960px) {
    grid-template-columns: auto;
  }
`;
export const GridContainer3 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
  background: #fff;
`;
export const GridContainerCheckBox = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 10px;
  margin-left: 8px;
`;
export const GridContainer1 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-around;
  margin-left: 5px;
  background: #fff;
  padding: 10px;
  border: 1px dashed #5faee3;
  border-radius: 6px;
`;
export const GridContainerPhoto = styled(Box)`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  @media (max-width: 960px) {
    grid-template-columns: auto auto auto;
  }
`;
export const GridContainer2 = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 5px;
  margin-left: 5px;
  max-height: 250px;
  overflow: auto;
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: end;
`;

export const DropDown = styled.select`
  width: 100%;
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
export const DropDownLong = styled.select`
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

export const Disabled = styled.div`
  width: 100%;
  height: 35px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #918e8e;
  display: flex;
  justify-content: start;
  padding-left: 5px;
  align-items: center;
`;

export const InputField = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  height: 45px !important;
  border-radius: 4px;
  background: #fff;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  .MuiInputBase-input {
    font-size: 14px;
    line-height: 1.1875em;
    color: #918e8e;
  }
  padding-left: 5px;
  margin-right: 5px;
`;

export const InputFieldLoggedBy = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  height: 20px !important;
  border-radius: 4px;
  background: #fff;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  .MuiInputBase-input {
    font-size: 14px;
    line-height: 1.1875em;
    color: #918e8e;
    width: 600px;
    height: 20px;
  }
  padding-left: 5px;
  margin-right: 5px;
  margin-bottom: 40px;
`;

export const InputFieldNotes = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  height: 45px !important;
  border-radius: 4px;
  height: 150px;
  background: #fff;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  .MuiInputBase-input {
    font-size: 14px;
    line-height: 1.1875em;
    color: #918e8e;
    height: 150px;
  }
  padding-left: 5px;
  margin-right: 5px;
  margin-bottom: 100px;
`;
export const InputFieldSubject = styled(({ visible, ...otherProps }) => (
  <input {...otherProps} />
))`
  height: 36px !important;
  width: 250px;
  padding-left: 5px;
  color: #918e8e;
  font-size: 14px;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 2px;
  background: #fff;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  position: relative;
  z-index: 2;
`;

export const DateField = styled(({ visible, ...otherProps }) => (
  <input {...otherProps} />
))`
  width: 100%;
  height: 35px !important;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-left: 5px;
  color: #918e8e;
`;

export const Placeholder = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  width: 100%;
  height: 1px !important;
  visibility: hidden;
`;

export const InputWrapper = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  width: 100%;
`;

export const MainWrapper = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))``;
export const BlueHeader = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #fff;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  border-radius: 6px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const HorDiv = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #fff;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;

  gap: 5px;
`;

export const BlueLine = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #ccc;
  height: 1px;

  width: 100%;
`;

export const StyledDivSmall = styled(
  ({ disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  )
)`
  background-color: #4fadea;
  color: #${(props) => props.color};
  height: 30px;
  cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
  pointer-events: auto;
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 8px;
`;

export const StyledDiv = styled(
  ({ width, disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  )
)`

background-color:#${(props) => props.background};
color:#${(props) => props.color};
height: 30px;
cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
pointer-events: auto;
opacity:${(props) => (props.disabled ? '0.3' : '1')};
min-width:100px;
width:${(props) => (props.width ? props.width : '100px')};
font-size:13px;
&:hover {
  background: ${(props) => (props.disabled ? '#4fadea' : '#0087de')};
}

display: flex;
  justify-content: center;
  align-items: center;

margin 4px;
border:1px solid #4fadea;
border-radius:3px;

`;

export const ImagesDiv = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))` 
 

display: flex;
  justify-content: start;
  align-items: center;

margin 6px;

`;

export const StyledButton = styled(({ background, visible, ...otherProps }) => (
  <Button {...otherProps} />
))`
  border: 1px solid red;
  border-radius: 11px;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;
