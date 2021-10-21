import { Box, Button, TextField, Typography } from '@material-ui/core'

import styled from 'styled-components'

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
`

export const CreateCaseForm = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: 10px;
`

export const InfoLabel = styled(({ bold, visible, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  font-size: 12px;
  margin-right: 180px;
  text-align: left;
  color: #5faee3;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

export const WhiteLabel = styled(Typography)`
  font-size: 14px;

  margin-left: 5px;
`

export const HeadingLabel = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  margin-right: 135px;
  text-align: left;
  color: #5faee3;
`

export const HeadingLabel1 = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  margin-right: 200px;
  margin-top: 50px;
  text-align: left;
  color: #5faee3;
`

export const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 55% 45%;
  grid-gap: 10px;
  margin: 5px;
`

export const FileuploadContainer = styled(Box)`
  display: grid;
  grid-gap: 10px;
  margin: 5px auto 0px auto;
  text-align: left;
`
export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  margin: 0px auto 0px auto;
`
export const GridContainerPhoto = styled(Box)`
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  margin: 0px auto 0px auto;
`

export const ButtonsContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  margin: 20px;
`

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

export const Disabled = styled.div`
  width: 450px;
  height: 35px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #918e8e;
  display: flex;
  justify-content: start;
  padding-left: 5px;
  align-items: center;
`

export const InputField = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  width: 450px;
  height: 45px !important;
  position: relative;
  left: -5px;
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
`

export const DateField = styled(({ visible, ...otherProps }) => (
  <input {...otherProps} />
))`
  width: 450px;
  height: 35px !important;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-left: 5px;
  color: #918e8e;
`

export const Placeholder = styled(({ visible, ...otherProps }) => (
  <TextField variant="outlined" {...otherProps} />
))`
  width: 450px;
  height: 1px !important;
  visibility: hidden;
`

export const InputWrapper = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  width: 450px;
`

export const MainWrapper = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #fff;
`
export const BlueHeader = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #5faee3;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`

export const HorDiv = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #5faee3;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
  color: #fff;
  gap: 5px;
`

export const BlueLine = styled(({ visible, ...otherProps }) => (
  <div {...otherProps} />
))`
  background-color: #5faee3;
  height: 1px;

  width: 98%;
  margin-left: 5px;
  margin-bottom: 15px;
`

export const StyledDiv = styled(
  ({ disabled, color, background, visible, ...otherProps }) => (
    <div {...otherProps} />
  ),
)` 
 
background-color:#${(props) => props.background};
color:#${(props) => props.color};
height: 50px;
cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
pointer-events: auto;
opacity:${(props) => (props.disabled ? '0.3' : '1')};

display: flex;
  justify-content: center;
  align-items: center;

margin 6px;

`

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

export const StyledButton = styled(({ background, visible, ...otherProps }) => (
  <Button {...otherProps} />
))`
  border: 1px solid red;
  border-radius: 11px;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`
