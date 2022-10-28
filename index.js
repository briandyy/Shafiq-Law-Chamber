const express= require('express')
const path= require('path')


var app= express();

app.use(express.static("image"));
app.get("/static", (req, res) => {
  res.render("static");
});

const publicDirectory = path.join(__dirname, "./assets");
app.use(express.static(publicDirectory));
//Get Jason Data format
app.use(express.json());


app.set('views', __dirname + '/views');
app.set("view engine", "ejs");


app.use ("/", require("./routes/pages"));
// Running the application on port 5000
app.listen(5000, () => {
    console.log("Node Server is running at port 5000");
  });
