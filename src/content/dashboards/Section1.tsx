import React, { Fragment } from 'react'
import { Card, Box, Typography, Avatar } from '@material-ui/core'

import { Holder } from './Common.style'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Section1() {
  const price = {
    week: {
      labels: [
        'Monday',
        'Tueday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
    },
  }
  const [value, setValue] = React.useState()
  const onChange = () => {}

  return (
    <Card>
      <Holder>
        <Calendar onChange={onChange} value={value} />
      </Holder>
    </Card>
  )
}

export default Section1
