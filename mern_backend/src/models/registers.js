const mongoose=require("mongoose");

const employeeSchema =new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Phone:{
        type:Number,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Confirmpassword:{
        type:String,
        required:true,
    }
})

const Register =new mongoose.model("Register",employeeSchema);

module.exports=Register;
