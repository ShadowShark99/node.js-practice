const { Router } = require("express");
const indexRouter = Router();

//middle ware functions
indexRouter.get("/", (req, res) => res.send("Home Page"));
indexRouter.get("/about", (req, res) => res.send("About Me, Hi!"));
indexRouter.get("/contact", (req, res) => res.send("<h2>123456</h2>"));
indexRouter.post("/contact", (req, res) => res.send("Posted"));

module.exports = indexRouter;
