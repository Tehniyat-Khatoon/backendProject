import student_model from "../Models/student_model.js"



const createDataService=async(name,email,message)=>{

    const studentdata=new student_model({name,email,message})
    await  studentdata.save() 
    return studentdata
}


const getStudentServices= async()=>{
    const studentData= await student_model.find()
    // console.log(studentData);
    return studentData
}
// const getstudentServices=async(name,email,message)=>{
//     const userdata=await userModel.find({
//       // name,
//       mobile,emailId})
  
//    console.log(userdata);
//     return userdata[0].password;
    // }
    export  {createDataService,getStudentServices}