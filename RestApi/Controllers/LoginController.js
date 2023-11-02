import  {createLoginServices, getLoginServices } from "../Services/loginServices.js";

const createLoginData= async(req,res)=>{
   
   //  console.log(`the name is ${name}`)
   //  console.log(`the name is ${email}`)
   //  console.log(`the name is ${message}`)
   //  console.log('hii');
   let {UserName,Password}=req.body 
   console.log(req.body);
   if (UserName == 'stepAcademy' && Password == 'step@123') {
    res.status(200).json({ message: 'Login successful' });
 } else {
    res.status(401).json({ message: 'Login failed' });
 }

  
  const data= await createLoginServices(UserName,Password)
  console.log(data);
  //  console.log(res);
  // res.json({data})
  
} 

const getLoginData= async(req,res)=>{
 const data = await getLoginServices()
 res.json({data})
}
export  {createLoginData,getLoginData}