
import mongoose from "mongoose";

// import bcrypt from "bcrypt";
// const saltRounds = 10;

const userSchema = new mongoose.Schema({
  fname: 
  // {type:String,require:true},
  {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Implement your custom validation logic here
        return /^[a-zA-Z ]+$/.test(value); // Allow only letters and spaces
      },
      message: ' First Name can only contain letters and spaces',
    },
  },
  lname: 
  //  { type: String, require: true },
  {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Implement your custom validation logic here
        return /^[a-zA-Z ]+$/.test(value); // Allow only letters and spaces
      },
      message: ' Last Name can only contain letters and spaces',
    },
  },

  mobile: {
    type: Number,
    validate: {
      validator: validateMobileNumber,
      message: 'Invalid mobile number format',
    }
  },
  emailId:
  // { type: String, require: true }

  {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Implement your custom validation logic here
    
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/;
          return emailRegex.test(value);
      },
      message: ' Invalid email address',
    },
  },

  


});

function validateMobileNumber(mobile) {
  // Regular expression to match a typical 10-digit mobile number.
  const mobileNumberPattern = /^[0-9]{10}$/;
  return mobileNumberPattern.test(mobile);
}

const userModel = mongoose.model('user', userSchema)
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
