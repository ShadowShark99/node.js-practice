const pool = require("./pool");

async function getAllUsernames() {
  const {rows} = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username){
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsers(keyword){
  const searchPattern = `%${keyword}%`;
  const {rows} = await pool.query("SELECT * FROM usernames WHERE username ILIKE ($1)", [searchPattern]);
  return rows;
}

async function deleteUsers(){
  console.log("deleting all users");
  await pool.query("DROP TABLE usernames");
  await pool.query("CREATE TABLE usernames (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR (255))");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsers,
  deleteUsers,
};