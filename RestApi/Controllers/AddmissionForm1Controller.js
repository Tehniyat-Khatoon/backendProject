
import  {admissionServices, getAdmissionFormService } from "../Services/admisionService.js";



    const createAdmissionForm= async(req,res)=>{
        let {name,phone,email,course1,course2,course3,course4,subject1,subject2,subject3,subject4,subject5,subject6,installmentInput1,installmentInput2,installment1Date1,installment1Date2,address,image} =req.body
     const data= await admissionServices(name,phone,email,course1,course2,course3,course4,subject1,subject2,subject3,subject4,subject5,subject6,installmentInput1,installmentInput2,installment1Date1,installment1Date2,address,image)
   //   console.log(data);
   //   console.log(res);
     res.json({data})
     } 
  
     const getAdmissionForm = async(req,res)=>{
        const data = await getAdmissionFormService()
        res.json({data})
     }



export  {createAdmissionForm,getAdmissionForm}


