const { link } = require("fs");
const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    name:{
        type:String
    },
    id:{
        type:String
    },
    content:{
        type:String
    }

});
const Post = mongoose.model("Post",postSchema);
module.exports=Post;