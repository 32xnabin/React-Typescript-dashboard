import React from 'react'
import { Card, Typography } from '@material-ui/core'

import { GridContainer } from './Common.style'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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
const InputFilter = styled(({ color, ...otherProps }) => (
  <input {...otherProps} />
))`
  width: 99%;
  height: 35px;
  border: 1px solid #ccc;
  margin-left: 5px;
`

const Section7: React.FC = () => {
  const items = [
    'Karmela Francia - 24/06/2021',
    'Karmela Francia - 24/06/2021',
    'Karmela Francia - 24/06/2021',
    'Lorem ipsum- 24/06/2021',
    'RLorem ipsum- 24/06/2021',
  ]
  const [filterText, setFilterText] = React.useState('')
  const [filteredArray, setFilteredArray] = React.useState(items)

  React.useEffect(() => {}, [])

  const onFilterTextChange = (text: string) => {
    setFilterText(text)
    if (text !== '') {
      setFilteredArray(
        items.filter((item) =>
          item.toUpperCase().startsWith(text.toUpperCase()),
        ),
      )
    } else {
      setFilteredArray(items)
    }
  }

  return (
    <Card style={{ background: '#f6d746' }}>
      <GridContainer>
        <Typography
          style={{ marginLeft: 8, color: '#000', fontSize: 18 }}
          noWrap
        >
          Building Summary
        </Typography>
        <InputFilter
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        ></InputFilter>

        {filteredArray.map((item, index) => (
          <Row key={index}>
            <SubRow>
              <Typography style={{ marginLeft: 8, fontSize: 18 }} noWrap>
                {item}
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
        ))}
      </GridContainer>
    </Card>
  )
}

export default Section7
