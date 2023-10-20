import mongoose from "mongoose"

const AddmissionForm1Schema = new mongoose.Schema({

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
    phone: {
        type: Number,
        validate: {
            validator: validateMobileNumber,
            message: 'Invalid mobile number format',
        }
    },
    email:
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
    course1: { type: String, require: true, trim: true },
    course2: { type: String, require: true, trim: true },
    course3: { type: String, require: true, trim: true },
    course4: { type: String, require: true, trim: true },
    subject1: { type: String, require: true, trim: true },
    subject2: { type: String, require: true, trim: true },
    subject3: { type: String, require: true, trim: true },
    subject4: { type: String, require: true, trim: true },
    subject5: { type: String, require: true, trim: true },
    subject6: { type: String, require: true, trim: true },
    image:{
        type: String,
        required: true,
      },
      image: {
      data: Buffer,  // Store the image binary data as a Buffer
        contentType: String,
      },
    
      

    installmentInput1: { type: Number, min: 1, max: 11, require: true, trim: true },
    installmentInput2: { type: Number, min: 1, max: 11, require: true, trim: true },
    installment1Date1: { type: Date, require: true, trim: true },
    installment1Date2: { type: Date, require: true, trim: true },
    address: { type: String, require: true, trim: true },



})
function validateMobileNumber(mobile) {
    // Regular expression to match a typical 10-digit mobile number.
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobile);
}

// Add a custom validation function to check the image size
AddmissionForm1Schema.path('image.data').validate(function (value) {
    const maxSizeBytes = 2 * 1024 * 1024; // 2MB (adjust as needed)
  
    if (value && value.length > maxSizeBytes) {
      return false; // Validation fails
    }
  
    return true; // Validation passes
  }, 'Image size exceeds the allowed limit.');
  
const userAddmissionForm1Model = mongoose.model('AdmissionForm', AddmissionForm1Schema)

export default userAddmissionForm1Model