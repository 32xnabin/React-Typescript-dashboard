import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'

const Section5: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 6px;
    background-color: #b3e370;
    color: #fff;
    margin: 4px 8px;
  `
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;
    background-color: #b3e370;
    color: #fff;
  `

  return (
    <Card style={{ background: '#96ca4d' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#fff', fontSize: 18 }}
          noWrap
        >
          Building Summary
        </Typography>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              RESIDENTS
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8 }} noWrap>
              Overdue cases
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8 }} noWrap>
            7
          </Typography>
        </Row>
      </GridContainer>
    </Card>
  )
}

export default Section5
