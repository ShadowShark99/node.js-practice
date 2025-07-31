// controllers/authorController.js

const db = require("../db");
const CustomNotFound = require("../errors/CustomNotFound");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFound("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
}

module.exports = { getAuthorById };
