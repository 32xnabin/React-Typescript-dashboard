import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'
function Section9() {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    width: 100%;

    height: 20px;
    padding: 6px;

    color: #fff;
    margin: 8px 8px;
  `
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;

    color: #fff;
  `

  return (
    <Card style={{ background: '#5581e4' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#fff', fontSize: 18 }}
          noWrap
        >
          Activity Feed
        </Typography>

        <Typography
          style={{ marginLeft: 8, color: '#fff', fontSize: 14, marginTop: 10 }}
          noWrap
        >
          21/10/2021
        </Typography>

        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ fontSize: 12, color: '#fff' }} noWrap>
              14:10pm - Sign out key 324 - Jhun A
            </Typography>
          </SubRow>
        </Row>
      </GridContainer>
    </Card>
  )
}

export default Section9
