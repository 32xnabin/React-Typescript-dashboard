import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { loginUser } from '../../../services';




import {  
   InputField,
   MainContainer,
   GridContainer,
   MainWrapper,
   StyledDiv,
   } from './Login.style';
  



const Login: React.FC = () => {

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
  
    loginUser(data)
    .then((result: any) => {
      console.log("data=====>",result);
      if(result.success == true){
         navigate("/bm/cases/list");
      }else{
        setMessage("Wrong Credentials please try again!")
      }
  
     
    })
    .catch((error:any) => {
      console.log("error- form1->", error);
       setMessage("Something went wrong please try again!")
    });
  };
   
  const onCancel = (data:any) => {
    navigate("/bm/cases/list");
  };

 

  return (
   
     <GridContainer>
      <InputField 
       id="email" 
      {...register('email')}
      placeholder={"email"}/>

      <InputField 
        id="case_type" 
        {...register('password')}
        placeholder={"password"}/>

      <StyledDiv
            background={"5faee3"}
            color={"fff"}
            onClick={handleSubmit(onSubmit)}
          >
            LOGIN
          </StyledDiv> 
          <div style={{color:"red"}}>{message}</div>
          <div>
             <Link to="/forgot" style={{color:"#fff",marginLeft:50,fontSize:18,}}>Forgot password</Link>
          </div>
    
    </GridContainer>

          
  
 
  );
};

export default Login;