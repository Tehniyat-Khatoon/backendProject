import mongoose from 'mongoose'

// defining schema

const studentSchema = new mongoose.Schema({
    name: {type:String,min:100,max:900,require:true},
    email:{type:String,min:100,max:900,require:true},
    message:{type:String,min:1000,max:9000,require:true}
   
})

//model

const studentModel = mongoose.model("student",studentSchema)


export default studentModel