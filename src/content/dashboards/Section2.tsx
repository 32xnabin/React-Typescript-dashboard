import React, { Fragment } from 'react'
import { Card, Box, Typography, Avatar } from '@material-ui/core'

import { Holder } from './Common.style'
import { experimentalStyled } from '@material-ui/core/styles'

import DonutChart from 'react-donut-chart'

function Section2() {
  return (
    <Card>
      <Holder background={'fff'} style={{ position: 'relative', top: '-80px' }}>
        <DonutChart
          legend={false}
          innerRadius={0.6}
          outerRadius={0.3}
          selectedOffset={0.0}
          data={[
            {
              label: 'Repair and Maintainance',
              value: 25,
            },
            {
              label: 'Cleaning',
              value: 75,
            },
          ]}
        />
      </Holder>
    </Card>
  )
}

export default Section2
