import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Section7() {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    width: 100%;

    height: 60px;
    padding: 6px;
    background-color: #ffea9a;
    color: #000;
    margin: 8px 8px;
  `
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;

    color: #000;
  `

  return (
    <Card style={{ background: '#f6d746' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#000', fontSize: 18 }}
          noWrap
        >
          Building Summary
        </Typography>
        <div
          style={{
            background: '#fff',
            border: 'none',
            height: 30,
            width: '98%',
            marginLeft: 8,
          }}
        ></div>

        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8, fontSize: 18 }} noWrap>
              Karmela Francia - 24/06/2021
            </Typography>
            <FontAwesomeIcon
              color="black"
              style={{ marginRight: 8 }}
              fontSize={8}
              icon={faTrash}
            />
          </SubRow>

          <Typography style={{ marginLeft: 8 }} noWrap>
            Check recyclables area
          </Typography>
        </Row>

        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8, fontSize: 18 }} noWrap>
              Karmela Francia - 24/06/2021
            </Typography>
            <FontAwesomeIcon
              color="black"
              style={{ marginRight: 8 }}
              fontSize={8}
              icon={faTrash}
            />
          </SubRow>

          <Typography style={{ marginLeft: 8 }} noWrap>
            Check recyclables area
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8, fontSize: 18 }} noWrap>
              Karmela Francia - 24/06/2021
            </Typography>
            <FontAwesomeIcon
              color="black"
              style={{ marginRight: 8 }}
              fontSize={8}
              icon={faTrash}
            />
          </SubRow>

          <Typography style={{ marginLeft: 8 }} noWrap>
            Check recyclables area
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <Typography style={{ marginLeft: 8, fontSize: 18 }} noWrap>
              Karmela Francia - 24/06/2021
            </Typography>
            <FontAwesomeIcon
              color="black"
              style={{ marginRight: 8 }}
              fontSize={8}
              icon={faTrash}
            />
          </SubRow>

          <Typography style={{ marginLeft: 8 }} noWrap>
            Check recyclables area
          </Typography>
        </Row>
      </GridContainer>
    </Card>
  )
}

export default Section7
