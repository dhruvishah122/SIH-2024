const { link } = require("fs");
const mongoose = require("mongoose");
const investorSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    technology:{
        type:String
    },
    Investor_Type:{
        type:String
    },
   Year_of_establishment:{
        type:String
    },
    Employee_count:{
    type:Number
    },
    headquaters:{
        type:String
    },
    website:{
        type:String
    }

});
const Investor = mongoose.model("Investor",investorSchema);
module.exports=Investor;