import mongoose from "mongoose"

const AddmissionForm1Schema = new mongoose.Schema ( {

    name:{type:String,required:true,trim:true},
    phone:{type:mongoose.Decimal128,min:10,max:12,require:true},
    email:{type:String,require:true},
    course1:{type:String,require:true},
    course2:{type:String,require:true},
    course3:{type:String,require:true},
    course4:{type:String,require:true},
    subject1:{type:String,require:true},
    subject2:{type:String,require:true},
    subject3:{type:String,require:true},
    subject4:{type:String,require:true},
    subject5:{type:String,require:true},
    subject6:{type:String,require:true},
    image:{type:String,require:true},
    installmentInput1:{type:mongoose.Decimal128,min:10,max:11,require:true},
    installmentInput2:{type:mongoose.Decimal128,min:10,max:11,require:true},
    installment1Date1:{type:Date,require:true},
    installment1Date2:{type:Date,require:true},
    address:{type:String,require:true},
    


})

const userAddmissionForm1Model=mongoose.model('AdmissionForm',AddmissionForm1Schema)

export default userAddmissionForm1Model