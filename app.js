var express = require("express");
var todocontroller = require("./controllers/todocontroller");
var app = express();

//set up template engine
app.set("view engine","ejs");

//static files
app.use(express.static("./public"));

//fir controllers
todocontroller(app);

//listen to port
app.listen(3000);
console.log("you are listening to port 3000");
