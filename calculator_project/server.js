var express = require('express')
var app = express()

app.listen(3000, function(){
    console.log("server up!");
})

app.get("/",function(request, response){
    console.log(__dirname);
    response.sendFile(__dirname + "/index.html");
});