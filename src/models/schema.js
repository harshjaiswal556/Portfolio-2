const mongoose = require('mongoose');

const portfolio2Schema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const portfolio2Data = new mongoose.model("portfolio2Data",portfolio2Schema);
module.exports = portfolio2Data;