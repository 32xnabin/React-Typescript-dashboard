import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { resetPassword, validateResetToken } from '../../../services'
import { GridContainer, StyledDiv } from './Reset.style'
import { InputField } from '../Common.style'

const Reset: React.FC = () => {
  let navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const [message, setMessage] = React.useState('')
  const [code, setCode] = React.useState('')
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    validateCode()
  })
  const validateCode = () => {
    const code = new URLSearchParams(window.location.search).get('code')
    console.log('code------>', code)
    if (code) {
      setCode(code)

      validateResetToken({ token: code })
        .then((result: any) => {
          console.log('result-byiddd---->', result)
          setValid(true)
        })
        .catch((error: any) => {
          console.log('error- form1->', error)
          navigate('/nowhere')
        })
    } else {
      navigate('/nowhere')
    }
  }

  const onSubmit = (data: any) => {
    console.log('data=====>', data)
    const dataWithToken = { ...data, token: code }
    console.log('dataWithToken=====>', dataWithToken)

    resetPassword(dataWithToken)
      .then((result: any) => {
        console.log('data=====>', result)
        if (result.success === true) {
          setMessage('Sucess! go to login now')
        } else {
          setMessage('Something went wrong please try again!')
        }
      })
      .catch((error: any) => {
        console.log('error- form1->', error)
        setMessage('Something went wrong please try again!')
      })
  }

  return (
    <GridContainer>
      {valid && (
        <>
          <InputField
            id="newPassword"
            {...register('newPassword')}
            placeholder={'password'}
            type={'password'}
          />

          <InputField
            id="confirmPassword"
            {...register('confirmPassword')}
            placeholder={'confirm password'}
            type={'password'}
          />

          <StyledDiv
            background={'5faee3'}
            color={'fff'}
            onClick={handleSubmit(onSubmit)}
          >
            Reset
          </StyledDiv>
          <div style={{ color: 'red' }}>{message}</div>
          <div>
            <Link
              to="/login"
              style={{ color: '#fff', marginLeft: 50, fontSize: 18 }}
            >
              Login
            </Link>
          </div>
        </>
      )}
    </GridContainer>
  )
}

export default Reset
