const { link } = require("fs");
const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    name:{
        type:String
    },
    id1:{
        type:String
    },
    content:{
        type:String
    },
    email:{
        type:String
    }

});
const Post = mongoose.model("Post",postSchema);
module.exports=Post;