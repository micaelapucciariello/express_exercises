const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("server up!");
});

app.get("/",function(request,response){
    response.send("alo!");
});

app.get("/about",function(request,response){
    response.send("contact me. my phone is 1234-5678");
});