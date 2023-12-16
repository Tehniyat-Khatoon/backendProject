import mongoose from "mongoose"

const enquiryFormModelSchema = new mongoose.Schema({

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
    contactNumber: {
        type: Number,
        validate: {
            validator: validateMobileNumber,
            message: 'Invalid mobile number format',
        }
    },
    emailId: {
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
    cource: { type: String, require: true, trim: true, },
    residentialAddress: { type: String, require: true, trim: true, },
    // refrenceIfAny: { type: String, require: true, trim: true, }


})
function validateMobileNumber(mobile) {
    // Regular expression to match a typical 10-digit mobile number.
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobile);
}
const enquiryFormModel = mongoose.model('EnquiryForm', enquiryFormModelSchema)

export default enquiryFormModel