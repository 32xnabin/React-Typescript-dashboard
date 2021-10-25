import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

const Section4: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 6px;
    color: #000;
    margin: 4px 8px;
  `
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;
    color: #000;
  `

  return (
    <Card style={{ background: '#cecece' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#000', fontSize: 18 }}
          noWrap
        >
          Management Reports Generated
        </Typography>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
            <Typography
              style={{
                marginLeft: 8,
                color: '#fff',
                background: '#837e7e',
                padding: 2,
                borderRadius: 6,
                fontSize: 12,
              }}
              noWrap
            >
              Report Period 01/10/2021 - 31/10/2021
            </Typography>
          </SubRow>
          <Typography style={{ marginRight: 8, fontSize: 10 }} noWrap>
            Created: 21/10/2021
          </Typography>
        </Row>
      </GridContainer>
    </Card>
  )
}

export default Section4
