import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// const saltRounds = 10;

const userSchema=new mongoose.Schema({
    name:String,
    mobile:Number,
    emailId:String,  //{type:string,min:1000,max:9000,require:true}
    password:String  

});

const userModel=mongoose.model('user',userSchema)
// const myPlaintextPassword =  'password';


// const hashpassword=  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     const doc=new  userModel({
//       name:'ramu',
//       emailId:'ramu@gmail.com',
//       mobile:99873662,
//       password:hashpassword
//     })
//     doc.save()
//        console.log(hash);})
   
      

export default userModel
