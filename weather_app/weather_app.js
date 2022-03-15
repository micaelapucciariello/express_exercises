const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.listen(3001, function () {
  console.log("server up!");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
    var lat = request.body.latitude;
    var lon = request.body.longitude;

    const apikey = "f22be0a2d76ab7488164bbfa7f3430a9";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apikey;

  https.get(url, function (res) {
    
    res.on("data", function (data) {
      var weatherinfo = JSON.parse(data);
      var weather = weatherinfo.weather[0].main;
      var temperature = weatherinfo.main.temp;
      var city = weatherinfo.name;
      var icon = weatherinfo.weather[0].icon;
      var imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      response.write(
        "<h1>" + "The weather in " + city + " is " + weather + "</h1>"
      );
      response.write("The temperature is " + temperature + "");
      response.write("<br>");
      response.write("<img src=" + imgurl + ">");

      response.send();
    });
  });
});
