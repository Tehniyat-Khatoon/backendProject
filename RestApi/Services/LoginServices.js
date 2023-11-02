import LoginModel from "../Models/loginModel.js"



const createLoginServices=async(UserName,Password)=>{

    const LoginData=new LoginModel({UserName,Password})
    await  LoginData.save() 
    return LoginData
}
const getLoginServices= async()=>{
    const LoginData= await LoginModel.find()
    // console.log(studentData);
    return LoginData
}
export  {createLoginServices,getLoginServices}