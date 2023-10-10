
// import { model } from "mongoose";
import userModel from "../Models/userModel.js";



const userServices=async()=>{

    const servicedata=await userModel.find()
  //  console.log(servicedata);
    return servicedata
}

const userDataServices=async(fname, lname, emailId, mobile)=>{
  const userdata= new  userModel({fname, lname, emailId, mobile})
 await userdata.save()
 return userdata
 
}

// const getuserServices=async(fname,mobile,emailId)=>{
//     const userdata=await userModel.find({
//       // name,
//       mobile,emailId})
  
  //  console.log(userdata);
    // return userdata[0].password;
    
  // const hashpassword=  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // const doc=new  userModel({
  //   name:name,
  //   emailId:emailId,
  //   mobile:mobile,
  //   password:hash
  // })
  //    console.log(hash);})
  //    doc.save()
  //   return doc
// }

export {userServices,userDataServices}