console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express(); // expressning objectini ushlab olish uchun
const http = require("http");
const fs = require("fs");

//MongoDB calling
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish
app.use(express.static("public"));
app.use(express.static(__dirname + "public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 - Session code

// 3 - Views code
app.set("views", "views");
app.set("view engine", "ejs");

//routing code
app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/portfolio", function (req, res) {
  res.render("project", { usYer: user });
});

//app.get("/gift", function (req, res) {
//    res.end( `<h1 style="background:red;">bu sovg'alar sahifasi</h1>` );
//});

module.exports = app;
