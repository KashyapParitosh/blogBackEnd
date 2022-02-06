const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( {
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    isUserAdmin : {
        type : Boolean,
        required : true,
        default : false
    },
},{ timestamps : true })

const UserModel = mongoose.model("UserModel", userSchema)

module.exports = UserModel;