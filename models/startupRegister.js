const mongoose = require("mongoose");
const startupSchema = mongoose.Schema({
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
    Industry_Focus:{
        type:String
    },
    Startup_eligibility_criteria:{
        type:String
    },
    Startup_Revenue_Preference:{
    type:Number
    },
    location:{
        type:String
    },
});
const Startup = mongoose.model("Startup",startupSchema);
module.exports=Startup;