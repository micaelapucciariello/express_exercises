const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function(){
    console.log("server up!");
})

app.get("/",function(request, response){
    console.log(__dirname);
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
    var result = Number(request.body.num1)+ Number(request.body.num2);
    console.log("Result is: " + result);
    response.send("thank you for posting!");
});