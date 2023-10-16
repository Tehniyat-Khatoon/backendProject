import mongoose from 'mongoose'

// defining schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate: {
          validator: function (value) {
            // Implement your custom validation logic here
            return /^[a-zA-Z ]+$/.test(value); // Allow only letters and spaces
          },
          message: '  Name can only contain letters and spaces',
        },
      },
    email: {
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
    message:{type:String,min:10,max:900,require:true}
   
})

//model

const studentModel = mongoose.model("student",studentSchema)


export default studentModel