const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

//express server

let page404;
let pageIndex;
let pageAbout;
let pageContact;

const filePathI = path.join(__dirname, "index.html");
fs.readFile(filePathI, (err, data) => {
  //if (!err) app.get("/", (req, res) => res.end(data));
  if (!err) pageIndex = data;
});

const filePathA = path.join(__dirname, "about.html");
fs.readFile(filePathA, (err, data) => {
  //if (!err) app.get("/about", (req, res) => res.end(data));
  if (!err) pageAbout = data;
});

const filePathC = path.join(__dirname, "contact-me.html");
fs.readFile(filePathC, (err, data) => {
  //if (!err) app.get("/contact-me", (req, res) => res.end(data));
  if (!err) pageContact = data;
});

// 404 handler for all other routes
const filePath404 = path.join(__dirname, "404.html");
fs.readFile(filePath404, (err, data) => {
  //   app.use((req, res) => {
  //     if (!err) {
  //       res.status(404).end(data);
  //     } else {
  //       res.status(404).send("404 Not Found");
  //     }
  //   }
  // );
  if (!err) page404 = data;
});

app.get("/", (req, res) => res.end(pageIndex));
app.get("/about", (req, res) => res.end(pageAbout));
app.get("/contact-me", (req, res) => res.end(pageContact));
app.use((req, res) => res.end(page404));

const PORT2 = process.env.PORT || 3000;

app.listen(PORT2, () => {
  console.log(`My express app - listning on PORT: ${PORT2}`);
});

//classic server

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    const filePath = path.join(__dirname, "about.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact-me") {
    const filePath = path.join(__dirname, "contact-me.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    const filePath = path.join(__dirname, "404.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
