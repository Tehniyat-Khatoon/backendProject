import LoginModel from "../Models/LoginModel.js"



const createLoginServices=async(username,password)=>{

    const LoginData=new LoginModel({username,password})
    await  LoginData.save() 
    return LoginData
}
const getLoginServices= async()=>{
    const LoginData= await LoginModel.find()
    // console.log(studentData);
    return LoginData
}
export  {createLoginServices,getLoginServices}