var express = require("express");
var path = require("path");
var reserve = require("./reserve.html");

var app = express();
// var PORT = process.env.PORT || 2940;
var PORT = 2940;


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

app.et("/api/waitlist", function(req, res) {
    return res.json(waitlisted);
});

if(reservations.length > 3) {
    app.post("/api/waitlist", function(req, res) {
        waitlisted.push(newReserve);
        alert("Tables are currently full. We have added you to our waitlist.");
    });
} else {
    app.post("/api/tables", function(req, res) {
        reservations.push(newReserve);
        alert("Your reservation is complete!");
    });
}

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});