const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  }
  if (req.url === "/about") {
    res.end("About");
  }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
