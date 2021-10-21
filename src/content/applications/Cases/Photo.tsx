import {useState } from "react";
import { Box, CircularProgress } from '@material-ui/core';
interface IProps {
  uploadImage: (file:any) => Promise<boolean>;
}
 const  Photo: React.FC<IProps> = ({
  uploadImage,
}) => {
	 const [file,  setFile] = useState("")
      const [uploading,  setUploding] = useState(true)
     
     const handleChange = async (e) =>{

       setFile(URL.createObjectURL(e.target.files[0]));
         console.log(e.target.files[0]);
           const res = await uploadImage(e.target.files[0]);

                  setUploding(res);
     }
     
     return (
         <div style={{padding:0,margin:3}}>  
          <input style={{color:"#fff",margin:4}} type="file" onChange={handleChange}/>
          <br/>
          <img width="200" height="200" src={file}   style={{border:"2px solid #5faee3"}}/>
          { (uploading && file)?<div style={{height:20, color:"#5faee3"}}>uploading....</div>:<div style={{height:20}}></div>}
        </div> 
     )
	
}

export default Photo;