import  {createLoginServices, getLoginServices } from "../Services/LoginServices.js";

const createLoginData= async(req,res)=>{
   
   //  console.log(`the name is ${name}`)
   //  console.log(`the name is ${email}`)
   //  console.log(`the name is ${message}`)
   //  console.log('hii');
   let {username,password}=req.body 
   console.log(req.body);
  if (username=='stepAcademy' && password=='step@123') {
      
   res.send('login successfully')
 
  
  }else{
      res.send('login failed')
      
  }

  
  const data= await createLoginServices(username,password)
  console.log(data);
  //  console.log(res);
  res.json({data})
  
} 

const getLoginData= async(req,res)=>{
 const data = await getLoginServices()
 res.json({data})
}
export  {createLoginData,getLoginData}