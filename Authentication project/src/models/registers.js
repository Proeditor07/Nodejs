require('dotenv').config();
const expresss = require("express")
const async = require("hbs/lib/async")
const app = expresss()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true

    },
    lastname:{
        type:String,
        required:true

    },email:{
        type:String,
        required:true,
        unique:true,

    },gender:{
        type:String,
        required:true,
        
    },phone:{
        type:Number,
        required:true,
        unique:true,
        
    },age:{
        type:Number,
        required:true,
       
        
    },password:{
        type:String,
        required:true,
        
        
    },confirmpassword:{
        type:String,
        requird:true
    },tokens:[{
        token:{
            type:String,
        required:true,
        }

 }]
    

})
// Generating Tokens
employeeSchema.methods.generateAuthToken = async function(){
    try{
        const token =jwt.sign({_id:this._id.toString()},process.env.SECREAT_KEY);
        this.tokens = this.tokens.concat({token:token})  //can be also written ({token:token})
        await this.save();
        return token;


    }
    catch(errr){
        res.send("The error part"+errr);
        console.log("The error part"+errr)

    }
}

// Hashing the password
employeeSchema.pre("save",async function(next){
    if(this.isModified("password")){

        this.password = await bcrypt.hash(this.password,10)
        this.confirmpassword =  await bcrypt.hash(this.password,10);   
        // this.confirmpassword = undefined;   

    }
    next();
})

// Collection creation

const Register = new mongoose.model("Register",employeeSchema)
module.exports = Register;