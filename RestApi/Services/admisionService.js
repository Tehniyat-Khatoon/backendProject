import userAddmissionForm1Model from "../Models/AddmissionForm1.js"

const admissionServices=async(name,phone,email,course1,course2,course3,course4,subject1,subject2,subject3,subject4,subject5,subject6,installmentInput1,installmentInput2,installment1Date1,installment1Date2,address,image)=>{

    const admissiondata=new userAddmissionForm1Model({name,phone,email,course1,course2,course3,course4,subject1,subject2,subject3,subject4,subject5,subject6,installmentInput1,installmentInput2,installment1Date1,installment1Date2,address,image})
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