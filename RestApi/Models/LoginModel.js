import mongoose from "mongoose"

const LoginModelSchema = new mongoose.Schema({

  username:{
    type:String,
    required: true,
    trim: true,
   
},
password:{
    type:String,
    required:true,
    trim: true,
    validate: {
        validator: function (password) {
          // Implement your custom password validation logic here
          // For example, you can check if the password meets certain criteria.
          // Return true if the password is valid, or false if it's not.
          // Here's an example to check if the password has at least 6 characters:
          return password.length >= 6;
        },
        message: 'Password must be at least 6 characters long',
      },
}

})


const LoginModel = mongoose.model("Login",LoginModelSchema)


export default LoginModel