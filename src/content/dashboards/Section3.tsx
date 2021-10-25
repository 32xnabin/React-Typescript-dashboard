import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

const Section3: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 6px;
    background-color: #f99393;
    color: #fff;
    margin: 4px 8px;
  `
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;
    background-color: #f99393;
    color: #fff;
  `

  return (
    <Card style={{ background: '#f04547' }}>
      <GridContainer color={'f04547'}>
        <Typography
          style={{ marginLeft: 8, color: '#fff', fontSize: 18 }}
          noWrap
        >
          Items Requiring Action
        </Typography>
        <Row>
          <SubRow>
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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
            <FontAwesomeIcon color="white" fontSize={8} icon={faWrench} />
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

export default Section3
