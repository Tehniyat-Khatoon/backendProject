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
   
    //   image: {
    //   data: Buffer,  // Store the image binary data as a Buffer
    //     contentType: String,
    //   },



   



})
function validateMobileNumber(mobile) {
    // Regular expression to match a typical 10-digit mobile number.
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobile);
}

// Add a custom validation function to check the image size
// AddmissionForm1Schema.path('image.data').validate(function (value) {
//     const maxSizeBytes = 2 * 1024 * 1024; // 2MB (adjust as needed)

//     if (value && value.length > maxSizeBytes) {
//       return false; // Validation fails
//     }

//     return true; // Validation passes
//   }, 'Image size exceeds the allowed limit.');

const userAddmissionForm1Model = mongoose.model('AdmissionForm', AddmissionForm1Schema)

export default userAddmissionForm1Model
// validate: {
//     validator: function (value) {
//         // Implement your custom validation logic here
//         return /^[a-zA-Z ]+$/.test(value); // Allow only letters and spaces
//     },
//     message: '  Name can only contain letters and spaces',
// },