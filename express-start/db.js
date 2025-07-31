// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, title: "Warriors" },
  { id: 2, title: "The Little Hungry Catepillar" },
  { id: 3, title: "Science fell in love" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

const getBookById = async (bookId) => {
  return books.find((book) => book.id === bookId);
};

module.exports = { getAuthorById, getBookById };
