import { Card, Typography, Checkbox } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'

function Section8() {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 6px;
    color: #fff;
    margin: 4px 8px;
  `

  return (
    <Card style={{ background: '#f5ba4c' }}>
      <GridContainer>
        <Typography
          style={{
            marginLeft: 8,
            marginBottom: 10,
            color: '#7a7575',
            fontSize: 18,
          }}
          noWrap
        >
          Important Numbers
        </Typography>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
        <Row>
          <Typography
            style={{
              marginRight: 8,
              color: '#7a7575',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Fire
          </Typography>

          <Typography style={{ marginLeft: 8, color: '#7a7575' }} noWrap>
            999
          </Typography>
          <Checkbox style={{ color: '#fff' }} color="secondary"></Checkbox>
        </Row>
      </GridContainer>
    </Card>
  )
}

export default Section8
