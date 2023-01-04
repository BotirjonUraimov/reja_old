console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express(); // expressning objectini ushlab olish uchun
const http = require('http');
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

// 1 Kirish
app.use(express.static("public"));
app.use(express.static(__dirname + "public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 - Session code

// 3 - Views code 
app.set("views", "views");
app.set("view engine", "ejs");

//routing code 


app.get("/portfolio", function (req, res) {
    res.render( "project", {user: user} );
});

//app.get("/gift", function (req, res) {
//    res.end( `<h1 style="background:red;">bu sovg'alar sahifasi</h1>` );
//});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});

