/*const toggleButton = document.getElementById('button');
const nav = document.querySelector('.navbar');

toggleButton.addEventListener('click', function() {
  nav.classList.toggle('hidden');
});*/



const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("App started on server 3000");
});