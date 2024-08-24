const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const startupRegister = require("./models/startupRegister.js");
const investorRegister = require("./models/investorRegister.js");
const methodOverride = require("method-override");
const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/"));
app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main().then(()=>{
    console.log("connected");
}).catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/SIH");
}
//render to startup register form
app.get("/startupRegister",(req,res)=>{
    res.render("Backend/startupReg.ejs");
});
//render to startup login form
app.get("/startupLogin",(req,res)=>{
    res.render("Backend/startupLogin.ejs");
});
// saving startup register data and rendering to startup login
app.post("/startupDataSave",(req,res)=>{
let {name,email,password,technology, Industry_Focus,Startup_eligibility_criteria,Startup_Revenue_Preference,location} = req.body;
let newStartup = new startupRegister({
    name:name,
    email:email,
    password:password,
    technology:technology,
    Industry_Focus:Industry_Focus,
    Startup_eligibility_criteria:Startup_eligibility_criteria,
    Startup_Revenue_Preference:Startup_Revenue_Preference,
    location:location
});
newStartup.save().then(res=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
});
res.redirect("/startupLogin");
});
//login-authentication
app.post("/startupAuthenticate",  async function(req, res){
    try {
        // check if the user exists
        const user = await startupRegister.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.send(user);
          } else {
            res.render("/startupRegister");
          }
        } else {
            res.render("/startupRegister");
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});

//Investor
//render to investor register form
app.get("/investorRegister",(req,res)=>{
    res.render("Backend/investor.ejs");
});
//render to investor login form
app.get("/investorLogin",(req,res)=>{
    res.render("Backend/investorLogin.ejs");
});
// saving investor register data and rendering to investor login
app.post("/investorDataSave",(req,res)=>{
let {name,email,password,technology, Investor_Type,Year_of_establishment,Employee_count,headquaters,website} = req.body;
let newInvestor= new investorRegister({
    name:name,
    email:email,
    password:password,
    technology:technology,
    Investor_Type:Investor_Type,
    Year_of_establishment:Year_of_establishment,
    Employee_count:Employee_count,
    headquaters:headquaters,
    website:website
});
newInvestor.save().then(res=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
});
res.redirect("/investorLogin");
});
app.post("/investorAuthenticate",async(req,res)=>{
    try {
        // check if the user exists
        const user = await investorRegister.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.send(user);
          } else {
            res.render("/investorRegister");
          }
        } else {
            res.render("/investorRegister");
        }
      } catch (error) {
        res.status(400).json({ error });
      }
 });


 app.listen(5050, ()=>{
    console.log("server is listening on port 8080");

}
);