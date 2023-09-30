import mongoose from "mongoose"

const enquiryFormModelSchema = new mongoose.Schema ( {

    name:{type:String,required:true,trim:true},
    contactNumber:{type:mongoose.Decimal128,min:100,max:900,require:true},
    emailId:{type:String,min:100,max:900,require:true},
    cource:{type:String,min:100,max:900,require:true},
    residentialAddress:{type:String,min:100,max:900,require:true},
    refrenceIfAny:{type:String,min:10,max:90,require:true}


})

const enquiryFormModel=mongoose.model('EnquiryForm',enquiryFormModelSchema)

export default enquiryFormModel