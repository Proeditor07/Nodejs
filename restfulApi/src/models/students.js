const mongoose = require("mongoose");
const validate  = require("validator");


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:20,

    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validate.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },

    phone:{
        type:Number,
        minlen:10,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }  
})

// WE will create a collection
const Student = new mongoose.model("Student",studentSchema)

module.exports = Student;