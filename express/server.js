const express = require('express');
const app = express()

app.listen(3000, function(request,response){
    console.log("server up!");
});

app.get("/",function(){
    response.send("alo!");
});