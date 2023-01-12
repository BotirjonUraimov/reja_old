const http = require("http");

const kill = require("kill-port");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://botirjon:imPKIsagP8E6OxCD@cluster0.fqvnkag.mongodb.net/test";
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      //console.log(client); clint objectini ko'rish
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);
