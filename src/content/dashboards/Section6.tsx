import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

function Section6() {
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
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 40px;
    color: #fff;
  `

  return (
    <Card style={{ background: '#913dcb' }}>
      <GridContainer>
        <Typography
          style={{
            marginLeft: 8,
            marginBottom: 10,
            color: '#fff',
            fontSize: 18,
          }}
          noWrap
        >
          Latest Work Orders Sent
        </Typography>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
        <Row>
          <SubRow>
            <FontAwesomeIcon
              style={{
                color: '#fff',
                background: '#f04547',
                padding: 1,
                borderRadius: 2,
              }}
              color="white"
              fontSize={18}
              icon={faFilePdf}
            />
            <Typography style={{ marginLeft: 8 }} noWrap>
              WO#2514-A
            </Typography>
          </SubRow>
          <Typography
            style={{
              marginRight: 8,
              color: '#fff',
              background: '#b76ceb',
              padding: 2,
              borderRadius: 4,
              fontSize: 12,
            }}
            noWrap
          >
            Sent: 2021-10-06 21:13:25
          </Typography>
        </Row>
      </GridContainer>
    </Card>
  )
}

export default Section6
