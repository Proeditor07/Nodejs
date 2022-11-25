const express  = require("express");
const app = express();

const mongoose = require("mongoose")


const menScehma = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true

    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
       default:"100m"
    },


})

const MensRanking = new mongoose.model("MenRanking",menScehma)
module.exports = MensRanking;

