import React from 'react'
import { Card, Typography } from '@material-ui/core'

import { Holder, ReactCalender } from './Common.style'

function Section1() {
  const [value, setValue] = React.useState(new Date())
  const onChange = () => {
    setValue(new Date())
  }

  return (
    <Card style={{ background: '#45a7c1', padding: 10 }}>
      <Typography style={{ marginLeft: 8, color: '#fff', fontSize: 18 }} noWrap>
        Calendar
      </Typography>
      <Holder background={'45a7c1'}>
        <ReactCalender onChange={onChange} value={value} />
      </Holder>
    </Card>
  )
}

export default Section1
