var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 2940;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        routeName: "maurice",
        name: "Maurice",
        phoneNumber: "919-103-4956",
        email: "maurice@awesome.com",
        id: "sauce"
    }
];

var waitlisted = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlisted);
});

app.post("/api/tables", function(req, res) {
  var newReserve = req.body;
  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReserve);
    if(reservations.length > 3) {
        waitlisted.push(newReserve);
    } else {
        reservations.push(newReserve);
    }
  res.json(newCharacter);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});