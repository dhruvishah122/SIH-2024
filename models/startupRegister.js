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
    date:{
        type:String
    },
    status:{
        type:String
    },
    funds_sanctioned:{
        type:Number
    }
});
const Startup = mongoose.model("Startup",startupSchema);
module.exports=Startup;