const { Router } = require("express");
const bookRouter = Router();
const { getBookById } = require("../controllers/bookController.js");

//middle ware functions
bookRouter.get("/", (req, res) => res.send("All Books"));
bookRouter.get("/:bookID", getBookById);
bookRouter.get("/:bookID/reserve", (req, res) => {
  const { bookID } = req.params;
  res.send(`Reserving ${bookID}`);
});
bookRouter.post("/:bookID/reserve", (req, res) => {
  const { bookID } = req.params;
  res.send(`Reserving ${bookID}`);
});

module.exports = bookRouter;
