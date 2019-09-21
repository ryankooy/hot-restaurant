var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 2940;
var full = false;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        routeName: "maurice",
        name: "Maurice",
        phoneNumber: 9391029302,
        email: "maurice@awesome.com",
        id: "sauce"
    },
    {
        routeName: "miran",
        name: "Miran",
        phoneNumber: 3019204839,
        email: "lakwwlk@lgiaoz.com",
        id: "Boston"
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

<<<<<<< HEAD

app.post("/api/tables", function(req, res) {
=======
if(reservations.length > 3) {
    var list = "/api/waitlisted";
    full = true;
} else {
    list = "/api/tables";
}

app.post(list, function(req, res) {
>>>>>>> 0dde8fd9c7396f6c5875c091bc1f85b7572da8e3
  var newReserve = req.body;
  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReserve);
    if(full) {
        waitlisted.push(newReserve);
    } else {
        reservations.push(newReserve);
    }
  res.json(newReserve);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});