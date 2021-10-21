import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { forgotPassword } from '../../../services';




import {  
   InputField,
   MainContainer,
   GridContainer,
   MainWrapper,
   StyledDiv,
   } from './Forgot.style';
  



const Forgot: React.FC = () => {

  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const initialValue = [
    {
      type: "paragraph",
      children: [
        { text: " " },
        
      ]
    },
    
    
  ];
  const [message,setMessage]=React.useState("");
  
 
  

  React.useEffect(()=>{
   
    
  },[])

 
  
  const onSubmit = (data:any) => {

    console.log("data=====>",data);
  
    forgotPassword(data)
    .then((result: any) => {
      console.log("data=====>",result);
      if(result.success == true){
        setMessage(result.message)
      }else{
        setMessage("Wrong Credentials please try again!")
      }
  
     
    })
    .catch((error:any) => {
      console.log("error- form1->", error);
       setMessage("Something went wrong please try again!")
    });
  };
   
 

  return (
   
     <GridContainer>
      <InputField 
       id="email" 
      {...register('email')}
      placeholder={"email address"}/>
      <StyledDiv
            background={"5faee3"}
            color={"fff"}
            
        
            onClick={handleSubmit(onSubmit)}
          >
            NEXT
          </StyledDiv> 
      <div style={{color:"#fff",fontSize:18,}}>{message}</div>
    
    </GridContainer>

          
  
 
  );
};

export default Forgot;