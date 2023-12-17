import login_model from "../Models/login_model.js"




const createLoginServices=async(UserName,Password)=>{

    const LoginData=new login_model({UserName,Password})
    await  LoginData.save() 
    return LoginData
}
const getLoginServices= async()=>{
    const LoginData= await login_model.find()
    // console.log(studentData);
    return LoginData
}
export  {createLoginServices,getLoginServices}