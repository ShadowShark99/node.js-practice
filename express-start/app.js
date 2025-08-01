const express = require("express");
const path = require("path");
const app = express();
const authorRouter = require("./routers/authorRouter");
const bookRouter = require("./routers/bookRouter");
const indexRouter = require("./routers/indexRouter");

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//assets

// app.js
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//passed objects
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

//middle-ware function calls

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

//routing and controllers

app.use("/authors", authorRouter);
app.use("/book", bookRouter);
app.use("/", indexRouter);

//error middleware, catch thrown errors by previous app.use calls
app.use((err, req, res, next) => {
  console.log("poop");
  console.error(err);
  res.status(err.statusCode || 500).send(err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first express app - listning on PORT: ${PORT}`);
});
