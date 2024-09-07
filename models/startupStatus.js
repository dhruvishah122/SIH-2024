const mongoose = require("mongoose");
const startupStatusSchema = mongoose.Schema({
    investorName:{
        type:String
    },
    startupName:{
        type:String
    },
    fundingDetails:{
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
    },
    id:{
        type:String
    }
});
const startupStatus = mongoose.model("startupStatus",startupStatusSchema);
module.exports=startupStatus;