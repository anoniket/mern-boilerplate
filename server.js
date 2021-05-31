// Initial setup - common for all apps
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const findOrCreate = require("mongoose-findorcreate");
require('dotenv').config();
const path = require("path");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client", "build")))


const uri = process.env.ATLAS_URI;
// in .env file specify mongo url
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true}
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Einates have captured mongoose successfully");
});



// Primary route definitions

// First require the routes
// ---------------------------------

const foodRouter = require('./routes/food');
const exerciseRouter = require("./routes/exercise");

// And then use the routes
// -------------------------------------

app.use('/food', foodRouter);
app.use("/exercise",exerciseRouter);



// Sample post request

// app.post("/addStrava",function(req,res){
//   if(req.user){
//     console.log(req.body);
//     if(req.body.accT!==""&&req.body.refT!==""&&req.body.expiresAt!==""){
//      Admin.findById(req.user._id)
//      .then(admin => {console.log(admin);
//        admin.accessT = req.body.accT;
//        admin.refT = req.body.refT;
//        admin.expiresAt = req.body.expiresAt;

       
//        admin.save().then(() => {
//         res.json({success:true});
//       });
//      })
//      .catch(err => res.status(400).json('Error' + err));

//     }
//   }
  
// })


//Sample get request

// app.get("/fetchStrava",function(req,res){
//   if(req.user){
//     Admin.findById(req.user._id)
//     .then(admin =>{
//       res.json({success:true,data:admin})
//     })
//   }
// })






app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Einates at your Service on port: ${port}`);
});