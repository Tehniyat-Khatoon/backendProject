
// import { model } from "mongoose";
import user_model from "../Models/user_model.js";




const userServices=async()=>{

    const servicedata=await user_model.find()
  //  console.log(servicedata);
    return servicedata
}

const userDataServices=async(fname, lname,mobile, emailId)=>{
  const userdata= new  user_model({fname, lname,mobile, emailId})
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