//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send('We made it');
});

app.get("/contact", function(request, response){
  response.send('Contact me at musamarket@gmail.com');
});

app.listen(3000, function(){
  console.log('Server started on Port 3000!');
  console.log('Your a king Shawntez.');
});
