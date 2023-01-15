console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express(); // expressning objectini ushlab olish uchun
const http = require("http");
const fs = require("fs");

//MongoDB calling
const db = require("./server").db();
const mongodb = require("mongodb");

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
app.post("/create-item", (req, res) => {
  //console.log(req.body);
  console.log("user intered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    //console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id; // frontenddan kelgan idni ushlab olayapmiz
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "All plans removed" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user intered http://localhost:3000/ ");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something wenr wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

app.get("/portfolio", function (req, res) {
  res.render("project", { user: user });
});

//app.get("/gift", function (req, res) {
//    res.end( `<h1 style="background:red;">bu sovg'alar sahifasi</h1>` );
//});

module.exports = app;
