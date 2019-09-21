var express = require("express");
var path = require("path");

var app = express();
// var PORT = process.env.PORT || 2940;
var PORT = 2940;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var guests = [
    {
        routeName: "maurice",
        name: "Maurice",
        phoneNumber: "919-103-4956",
        email: "maurice@awesome.com",
        id: "sauce"
    }
];

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
    return res.json(guests);
});

// app.get("/api/tables/:guest", function (req, res) {
//     var table = req.params.guest;

//     console.log(table);

//     // for (var i = 0; i < guests.length; i++) {
//     //     if(table === guests[i].routeName) {
//     //         return res.json(guests[i]);
//     //     }
//     // }

//     // return res.json(false);
// });

app.post("/api/waitlist", function(req, res) {
    var newGuest = req.body;
    newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();
    console.log(newGuest);
    guests.push(newGuest);
    res.json(newGuest);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});