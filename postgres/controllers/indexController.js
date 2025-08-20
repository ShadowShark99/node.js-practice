const db = require("../db/queries");

exports.usersGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", {
    title: "All Users",
    usernames,
  });
};

exports.searchGet = async (req, res) => {
  const {search} = req.query;
  const usernames = await db.searchUsers(search);
  console.log("Found Users: ", usernames);
  res.render("search", {
    users: usernames,
  });
}