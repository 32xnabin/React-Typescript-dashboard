import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { forgotPassword } from '../../../services'

import { GridContainer, StyledDiv } from './Forgot.style'

import { InputField } from '../Common.style'

const Forgot: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const [message, setMessage] = React.useState('')

  React.useEffect(() => {}, [])

  const onSubmit = (data: any) => {
    forgotPassword(data)
      .then((result: any) => {
        if (result.success === true) {
          setMessage(result.message)
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
      <InputField
        id="email"
        {...register('email')}
        placeholder={'email address'}
      />
      <StyledDiv
        background={'5faee3'}
        color={'fff'}
        onClick={handleSubmit(onSubmit)}
      >
        NEXT
      </StyledDiv>
      <div style={{ color: '#fff', fontSize: 18 }}>{message}</div>
    </GridContainer>
  )
}

export default Forgot
