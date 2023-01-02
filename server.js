console.log("Web serverni boshlash");
const express = require("express");
const app = express(); // expressning objectini ushlab olish uchun
const http = require('http');
// 1 Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 - Session code

// 3 - Views code 
app.set("views", "views");
app.set("view engine", "ejs");

//routing code 
app.get("/", function (req, res) {
    res.end( `<h1 style="background:red;">Hello world by me</h1>` );
});

app.get("/gift", function (req, res) {
    res.end( `<h1 style="background:red;">bu sovg'alar sahifasi</h1>` );
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});