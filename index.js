const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const fs = require('fs');
const mongoose = require("mongoose");
const path=require("path");
const startupRegister = require("./models/startupRegister.js");
const investorRegister = require("./models/investorRegister.js");
const posts = require("./models/posts.js");
const methodOverride = require("method-override");
const port = 8080;
const cors = require('cors');
app.use(cors());
const multer = require('multer');
const upload = multer({dest: './uploads'});
const filePath = path.join(__dirname, 'data.json');
app.use(bodyParser.urlencoded({ extended: false }))
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
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Check if jsonData is an array
    if (Array.isArray(jsonData)) {
        // Fetch the last element of the array
        const lastElement = jsonData[jsonData.length - 1];
        console.log(lastElement);
    } else {
        // If jsonData is an object, convert it to an array of values and get the last element
        const values = Object.values(jsonData);
        const lastElement = values[values.length - 1];
        console.log(lastElement);
    }
});
function addDataToJson(newData) {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading the file:', err);
          return;
      }

      let jsonData = { items: [] }; // Initialize with an items array
      try {
          // Parse existing data or start with a new object if the file is empty
          jsonData = data ? JSON.parse(data) : jsonData;

          // Check if the parsed data is an object and has items as an array
          if (typeof jsonData !== 'object' || !Array.isArray(jsonData.items)) {
              console.error('Error: JSON data is not a valid object with items array.');
              return;
          }

      } catch (err) {
          console.error('Error parsing JSON data:', err);
          return;
      }

      // Add new data as a new object in the items array
      jsonData.items.push(newData); // Push newData to the items array

      // Write the updated data back to the JSON file
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
          if (err) {
              console.error('Error writing to the file:', err);
              return;
          }
          console.log('Data added successfully!');
      });
  });
}
//investor push data
function addInvestorDataToJson(newData) {
  const filepath = path.join(__dirname, 'investorData.json');
  fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading the file:', err);
          return;
      }

      let jsonData = { items1: [] }; // Initialize with an items array
      try {
          // Parse existing data or start with a new object if the file is empty
          jsonData = data ? JSON.parse(data) : jsonData;

          // Check if the parsed data is an object and has items as an array
          if (typeof jsonData !== 'object' || !Array.isArray(jsonData.items1)) {
              console.error('Error: JSON data is not a valid object with items array.');
              return;
          }

      } catch (err) {
          console.error('Error parsing JSON data:', err);
          return;
      }

      // Add new data as a new object in the items array
      jsonData.items1.push(newData); // Push newData to the items array

      // Write the updated data back to the JSON file
      fs.writeFile(filepath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
          if (err) {
              console.error('Error writing to the file:', err);
              return;
          }
          console.log('Data added successfully!');
      });
  });
}
app.post("/startupDataSave",upload.single("img"),(req,res)=>{
 
let {name,email,password,technology, Industry_Focus,Startup_eligibility_criteria,Startup_Revenue_Preference,location} = req.body;
let newStartup = new startupRegister({
    name:name,
    email:email,
    password:password,
    technology:technology,
    Industry_Focus:Industry_Focus,
    Startup_eligibility_criteria:Startup_eligibility_criteria,
    Startup_Revenue_Preference:Startup_Revenue_Preference,
    location:location,
   
});
newStartup.save().then(res=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
});
addDataToJson(newStartup);
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
            console.log(user);
            res.render("Backend/startupProfile.ejs",{user});
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
    res.render("Backend/investorReg.ejs");
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
addInvestorDataToJson(newInvestor);
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
           
              console.log(user);
              res.render("Backend/investorProfile.ejs",{user});
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

//posts

app.post("/postData",(req,res)=>{
  console.log(req.body);
const {content,name,id}=req.body;
let newPost= new posts({
  content:content,
  name:name,
  id:id
});
newPost.save().then(res=>{
  console.log(res);
}).catch((err)=>{
console.log(err);
});

//   res.render("Backend/posts.ejs",{newPost});
res.send("done");
})
 app.listen(8080, ()=>{
    console.log("server is listening on port 8080");

}
);

//get startupProfile Data
app.get('/profile',cors(),(req,res)=>{

});
app.post('/profile', async(req, res) => {
  const filepath = path.join(__dirname, 'Frontend', 'id.json');

  // Read the JSON file
  fs.readFile(filepath, 'utf8', async (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          return;
      }
      
      // Parse the JSON data
      const jsonData = JSON.parse(data);
      const lastElement = jsonData.ids[jsonData.ids.length - 1];
          
          // Print the id of the last element
          console.log('Last Element id:', lastElement.id);
         const ans = await startupRegister.findById(lastElement.id);
         const user = await startupRegister.findOne({ email: ans.email });
             console.log(user.name);
        
             res.redirect(`/startupProfile?name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.email)}`);

    
  });
  //  const dat =  await startupRegister.findOne({ _id: new ObjectId(lastElement._id) });
   // console.log(lastElement);
  
  });
app.get("/startupProfile",async(req,res)=>{
  const user = await startupRegister.findOne({ email: req.query.email });
  console.log("here is your user");
  console.log(user);
  const htmlResponse = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${user?.name}</title>
    <link href="../Frontend/css/startupProfile.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>
<body>
   
<div class="container bootstrap snippets bootdey">
<div class="row">
  <div class="profile-nav col-md-3">
      <div class="panel">
          <div class="user-heading round">
              <a href="#">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
              </a>
               <h1>${user?.name}</h1>
              <h4>${user?.email}</h4>
          </div>
         
          <ul class="nav nav-pills nav-stacked">
              <li class="active"><a href="#"> <i class="fa fa-user"></i> Profile</a></li>
              <li><a href="#"> <i class="fa fa-calendar"></i> Chat with me </a></li>
              <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
          </ul>
          <img class=".high-quality-gif" src="../uploads/sales_vs_year.gif" alt="Loading..." style=" width:350px; /* Ensure it scales within its container */
          image-rendering: crisp-edges; /* For sharp edges in pixel art */
          image-rendering: pixelated; /* Another option for pixel art */
          object-fit: cover;height: 250px;float: left;display: flex;">
        </div>
  </div>
  <div class="profile-info col-md-9">
      <div class="panel">
          <form>
              <textarea placeholder="Whats new idea? share here.." rows="2" class="form-control input-lg p-text-area"></textarea>
          </form>
          <footer class="panel-footer">
              <button class="btn btn-warning pull-right" style="background-color: #097d7d;">Post</button>
              <ul class="nav nav-pills">
                  <li>
                      <a href="#" style="color:black"><i class="fa fa-map-marker"></i></a>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-camera"></i></a>
                  </li>
                  <li>
                      <a href="#"><i class=" fa fa-film"></i></a>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-microphone"></i></a>
                  </li>
              </ul>
          </footer>
      </div>
      <div class="panel">
          <div class="bio-graph-heading">
             <b> AI Technologies: </b><a href="https://www.google.com" style="color:white">See our website</a>
          </div>
          <div class="panel-body bio-graph-info">
              <!-- <h1>Startup Details</h1> -->
              <div class="row">
                   
                    <p><span><b><b>Technology</b></b></span> :  ${user?.technology}</p>
                
                 
                      <p><span><b><b>Location </b></b></span> :   ${user?.location}</p>
                 
                  
                      <p><span><b><b>Industry Focus</b> </b></span> :  ${user?.Industry_Focus}></p>
                      <p><span><b> <b>Startup eligibility criteria</b></b> </span> :  ${user?. Startup_eligibility_criteria}></p>
                      
                  
                
              </div>
          </div>
      </div>
      <div>
          <div class="row">
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div style="display:inline;width:70px;height:70px;"><canvas width="100" height="70px"></canvas><input class="knob" data-width="100" data-height="70" data-displayprevious="true" data-thickness=".2" value="" data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 20px; margin-left: -77px; border: 2px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(224, 107, 125); padding: 0px; -webkit-appearance: none; background: none;"></div>
                          </div>
                          <div class="bio-desk">
                           <h4 class="red"> <b>20+ Investors invested</b> </h4><br>
                             <h4 class="red"> <b>30+ Startups Collaborated</b> </h4>
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div style="display:inline;width:100px;height:70px;"><canvas width="100" height="100px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 2px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(76, 197, 205); padding: 0px; -webkit-appearance: none; background: none;"></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="terques"><b>Average ticket size : 500000</b> </h4><br>
                              <h4 class="terques"><b>Revenue preference :  ${user?.Startup_Revenue_Preference}></b> </h4>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div style="display:inline;width:100px;height:80px;"><canvas width="100" height="80px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 2px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(150, 190, 75); padding: 0px; -webkit-appearance: none; background: none;"></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="green"><b>16 crores valuation</b></h4>
                              <h4 class="green"><b>4 crores turnover FY2023</b></h4>
                              <h4 class="green"><b>60% profit margin</b></h4>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart"> 
                              <div style="display:inline;width:100px;height:100px;"><canvas width="100" height="100px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 2px ; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;"></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="purple"><b>See Our Achievements..</b></h4>
                              <h4 class="purple" style="text-decoration: none;"><b><a href="#">Click here..</a></b></h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</body>
</html>`;

        // Send the HTML response
        res.send(htmlResponse);
  // res.render("Backend/startupProfile.ejs",{user});
});