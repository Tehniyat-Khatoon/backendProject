import mongoose from "mongoose"

const AddmissionForm1Schema = new mongoose.Schema ( {

    name:{type:String,required:true,trim:true},
    contactNumber:{type:mongoose.Decimal128,min:100,max:900,require:true},
    cource:{type:String,min:100,max:900,require:true},
    subject:{type:String,min:100,max:900,require:true},
    image:{type:String,require:true},
    installments:{type:mongoose.Decimal128,min:10,max:11,require:true},
    residentialAddress:{type:String,min:100,max:900,require:true},
    


})

const userAddmissionForm1Model=mongoose.model('AdmissionForm',AddmissionForm1Schema)

export default userAddmissionForm1Model