import React from 'react'
import moment from 'moment'
import { Card, Typography, Box } from '@material-ui/core'
import DonutChart from 'react-donut-chart'
import { Myboscase } from '../../types'
import { getAllCases } from '../../services'
import { Holder } from './Common.style'

const Section2: React.FC = () => {
  const thisWeek = moment().startOf('day').subtract(1, 'week')
  const thisMonth = moment().startOf('day').subtract(1, 'month')
  const threeMonth = moment().startOf('day').subtract(3, 'month')
  const sixMonth = moment().startOf('day').subtract(6, 'month')
  const twelveMonth = moment().startOf('day').subtract(12, 'month')

  const filterCases = (duration, casesNow) => {
    console.log('=======duration===>', duration)

    const currentDate = new Date().toISOString().substr(0, 10)
    let durationDate = moment(currentDate)
    switch (duration) {
      case 'TODAY':
        durationDate = moment(currentDate)
        break
      case 'THIS_WEEK':
        durationDate = thisWeek
        break
      case 'MONTHLY':
        durationDate = thisMonth
        break
      case 'THREE_MONTHS':
        durationDate = threeMonth
        break
      case 'SIX_MONTHS':
        durationDate = sixMonth
        break
      case 'TWELVE_MONTHS':
        durationDate = twelveMonth
        break
      default:
        break
    }

    console.log('mybosCases--->', mybosCases)
    const filtered = casesNow.filter(
      (item) => moment(item.updatedAt) >= durationDate,
    )

    const namesOnly = filtered.map((item) => {
      return item.case_type
    })
    console.log('namesOnly--->', namesOnly)
    const count = {}
    namesOnly.forEach((e) => (count[e] ? count[e]++ : (count[e] = 1)))
    const keys = Object.keys(count)
    let total = 0
    for (let i = 0; i < keys.length; i++) {
      total += count[keys[i]]
    }
    const finalArray = []
    for (let i = 0; i < keys.length; i++) {
      finalArray.push({ label: keys[i], value: (count[keys[i]] / total) * 100 })
    }

    console.log(finalArray)

    setFilteredCases(finalArray)
  }

  const mock_assigned_to = [
    { value: 'TODAY', label: 'Today' },
    { value: 'THIS_WEEK', label: 'This Week' },
    { value: 'THIS_MONTH', label: 'Monthly' },
    { value: 'THREE_MONTHS', label: 'Three Months' },
    { value: 'SIX_MONTH', label: 'Six Months' },
    { value: 'TWELVE_MONTH', label: 'Twelve Months' },
  ]

  const [mybosCases, setMybosCases] = React.useState<Myboscase[]>()
  const [filteredCases, setFilteredCases] = React.useState<
    { value: string; label: string }[]
  >()

  React.useEffect(() => {
    getAllCases()
      .then((res) => {
        setMybosCases(res)
        filterCases('TODAY', res)
      })
      .catch((error) => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card style={{ padding: 10, height: '400px' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          style={{ marginLeft: 8, color: '#45a7c1', fontSize: 18 }}
          noWrap
        >
          Cases graph
        </Typography>

        <select
          id="duration"
          name="duration"
          onChange={(e) => filterCases(e.target.value, mybosCases)}
        >
          {mock_assigned_to.map(
            (item: { value: string; label: string }, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ),
          )}
        </select>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Holder
          style={{
            width: '300px',
            height: '300px',
            position: 'relative',
            top: '-80px',
          }}
        >
          <DonutChart
            legend={false}
            innerRadius={0.7}
            outerRadius={0.3}
            selectedOffset={0.0}
            data={filteredCases}
          />
        </Holder>
      </Box>
    </Card>
  )
}

export default Section2
