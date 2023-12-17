import userAddmissionForm1Model from "../Models/addmission_form1.js"

const admissionServices=async(name, phone, email, course1 )=>{

    const admissiondata=new userAddmissionForm1Model({name, phone, email, course1 })
    await  admissiondata.save() 
    return admissiondata
}
const getAdmissionFormService= async()=>{
    const studentData= await userAddmissionForm1Model.find()
    console.log(studentData);
    return studentData
}
// const getstudentServices=async(name,email,message)=>{
//     const userdata=await userModel.find({
//       // name,
//       mobile,emailId})
  
//    console.log(userdata);
//     return userdata[0].password;
    // }
    export  {admissionServices,getAdmissionFormService}