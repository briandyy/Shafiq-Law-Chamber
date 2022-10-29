// For error Handelling 
const morgan = require('morgan');
const errorHandling = require('https-error');
const bodyParser = require('body-parser');

// The Express Server
const express= require('express')
const path= require('path')

//Using the Express 
var app= express();

// Static Images render on the server 
app.use(express.static("image"));
app.get("/static", (req, res) => {
  res.render("static");
});

// Public Folder is assets
const publicDirectory = path.join(__dirname, "./assets");
app.use(express.static(publicDirectory));
//Get Jason Data format
app.use(express.json());

//View engin is ejs
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

//Router Pages
app.use ("/", require("./routes/pages"));

// Running the application on port 5000
app.listen(5000, () => {
    console.log("Node Server is running at port 5000");
  });
