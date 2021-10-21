import React, { useEffect, useState } from 'react'
import { Myboscase } from '../../../../types'
import { getAllCases } from '../../../../services'
import { Card } from '@material-ui/core'
import CasesTable from './CasesTable'

function RecentOrders() {
  const [mybosCases, setMybosCases] = useState<Myboscase[]>()

  useEffect(() => {
    getAllCases()
      .then((res) => {
        console.log('res====>', res)
        console.log('max----', res[res.length - 1].case_number)
        localStorage.setItem(
          'max_case_number',
          String(res[res.length - 1].case_number),
        )
        setMybosCases(res)
      })
      .catch((error) => {
        console.log('====>', error)
      })
  }, [])

  return (
    <Card style={{ border: 0, boxShadow: 'none' }}>
      {mybosCases && <CasesTable myboscases={mybosCases} />}
    </Card>
  )
}

export default RecentOrders
