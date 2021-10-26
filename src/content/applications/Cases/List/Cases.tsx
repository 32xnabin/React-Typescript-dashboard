import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Myboscase } from '../../../../types'
import { getAllCases } from '../../../../services'
import { Card } from '@material-ui/core'
import CasesTable from './CasesTable'

function Cases() {
  let navigate = useNavigate()
  const [mybosCases, setMybosCases] = useState<Myboscase[]>()

  useEffect(() => {
    getAllCases()
      .then((res) => {
        localStorage.setItem(
          'max_case_number',
          res.length > 0 ? String(res[res.length - 1].case_number) : "0",
        )
        setMybosCases(res)
      })
      .catch((error) => {
        console.log(error)
        navigate('/login')
      })
  })

  return (
    <Card style={{ border: 0, boxShadow: 'none' }}>
      {mybosCases && <CasesTable myboscases={mybosCases} />}
    </Card>
  )
}

export default Cases
