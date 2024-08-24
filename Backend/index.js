const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const Chat = require("./models/startupRegister.js");
const methodOverride = require("method-override");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"Backend"));
app.use(express.static(__dirname+"/Frontend/"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main().then(()=>{
    console.log("connected");
}).catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/SIH");
}