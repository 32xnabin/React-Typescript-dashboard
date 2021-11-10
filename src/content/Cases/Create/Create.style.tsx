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
  font-size: 12px;
  text-align: left;
  vertical-align: middle;
  color: #838181;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const WhiteLabel = styled(Typography)`
  font-size: 14px;

  margin-left: 5px;
`;

export const HeadingLabel = styled(Typography)`
  font-size: 16px;
  text-align: left;
  width: 350px;
`;

export const HeadingLabel1 = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  margin-right: 200px;
  margin-top: 50px;
  text-align: left;
  color: #5faee3;
`;

export const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 10px;
`;

export const FullWidthContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  justify-content: start;
  padding: 20px 45px;

  border: 1px solid #eee;
  border-top: none;
  border-radius: 6px;
  margin-bottom: 20px;
  background: #fff;
`;

export const FileuploadContainer = styled(Box)`
  background: #fff;
`;
export const GridContainerHeader = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-around;
  padding: 10px 0px;
  margin-right: 20px;
  border: 1px solid #eee;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  background: #fff;
`;
export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-around;
  padding: 20px 0px;
  margin-right: 20px;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 6px 6px;
  margin-bottom: 20px;
  background: #fff;
  align-items: top;
`;
export const GridContainer3 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-around;
  padding: 20px 0px;
  background: #fff;
`;
export const GridContainerCheckBox = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: middle;
  width: 350px;
  height: 20px;
`;
export const GridContainer1 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-between;
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
  margin: 10px auto;
`;
export const GridContainer2 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  margin-left: 5px;
  max-height: 400px;
  overflow-x: auto;
`;

export const ButtonsContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  margin: 20px;
`;

export const DropDown = styled.select`
  width: 350px;
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
  width: 350px;
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
  width: 550px;
  padding-left: 5px;
  color: #918e8e;
  font-size: 14px;
  border: 1px solid #ccc;
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
  width: 350px;
  height: 35px !important;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-left: 5px;
  color: #918e8e;
`;

export const Placeholder = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  width: 350px;
  height: 1px !important;
  visibility: hidden;
`;

export const InputWrapper = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  width: 350px;
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
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 6px;
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

  width: 98%;
`;

export const StyledDivSmall = styled(
  ({ disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  )
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
`;

export const StyledDiv = styled(
  ({ disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  )
)`

background-color:#${(props) => props.background};
color:#${(props) => props.color};
height: 30px;
cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
pointer-events: auto;
opacity:${(props) => (props.disabled ? '0.3' : '1')};

display: flex;
  justify-content: center;
  align-items: center;

margin 6px;
border:1px solid #4fadea;
border-radius:6px;

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
