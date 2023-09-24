import mongoose from "mongoose"

const enquiryFormModelSchema = new mongoose.Schema ( {

    name:String,
    contactNumber:Number,
    emailId:String,
    cource:String,
    residentialAddress:String,
    refrenceIfAny:String


})

const enquiryFormModel=mongoose.model('EnquiryForm',enquiryFormModelSchema)

export default enquiryFormModel