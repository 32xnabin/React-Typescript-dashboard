import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { loginUser } from '../../../services'

import { GridContainer, StyledDiv } from './Login.style'

import { InputField } from '../Common.style'

const Login: React.FC = () => {
  let navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    localStorage.setItem('token', '')
  }, [])

  const onSubmit = (data: any) => {
    loginUser(data)
      .then((result: any) => {
        if (result.success === true) {
          localStorage.setItem('token', String(result.accessToken))
          navigate('/bm/dashboards')
        } else {
          setMessage('Wrong Credentials please try again!')
        }
      })
      .catch((error: any) => {
        setMessage('Something went wrong please try again!')
      })
  }

  return (
    <GridContainer>
      <InputField id="email" {...register('email')} placeholder={'email'} />

      <InputField
        id="case_type"
        {...register('password')}
        placeholder={'password'}
        type={'password'}
      />

      <StyledDiv
        background={'5faee3'}
        color={'fff'}
        onClick={handleSubmit(onSubmit)}
      >
        LOGIN
      </StyledDiv>
      <div style={{ color: 'red' }}>{message}</div>
      <div>
        <Link
          to="/forgot"
          style={{ color: '#fff', marginLeft: 50, fontSize: 18 }}
        >
          Forgot password
        </Link>
      </div>
    </GridContainer>
  )
}

export default Login
