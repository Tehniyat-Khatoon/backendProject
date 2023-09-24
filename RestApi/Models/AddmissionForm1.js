import mongoose from "mongoose"

const AddmissionForm1Schema = new mongoose.Schema ( {

    name:String,
    contactNumber:Number,
    cource:String,
    subject:String,
    image:String,
    installments:Number,
    residentialAddress:String,
    


})

const userAddmissionForm1Model=mongoose.model('AdmissionForm',AddmissionForm1Schema)

export default userAddmissionForm1Model