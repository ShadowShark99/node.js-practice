const CustomNotFound = require("../errors/CustomNotFound");

const db = require("../db");

const getBookById = async (req, res) => {
  const { bookID } = req.params;
  const book = await db.getBookById(Number(bookID));

  if(!book)
    throw new CustomNotFound("Book Not Found");
  res.send(`Book Title: ${book.title}`);
};

module.exports = { getBookById };