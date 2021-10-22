import React, { Fragment } from 'react'
import { Card, Box, Typography, Avatar } from '@material-ui/core'

import { Holder, ReactCalender } from './Common.style'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Section1() {
  const [value, setValue] = React.useState()
  const onChange = () => {}

  return (
    <Card style={{ background: '#45a7c1',padding:10 }}>
      <Typography
        style={{ marginLeft: 8, color: '#fff', fontSize: 18 }}
        noWrap
      >
        Calendar
      </Typography>
      <Holder background={'45a7c1'}>
        <ReactCalender onChange={onChange} value={value} />
      </Holder>
    </Card>
  )
}

export default Section1
