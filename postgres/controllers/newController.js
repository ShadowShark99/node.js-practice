const db = require("../db/queries");

exports.newUsernameGet = async function(req, res){
  res.render("newUser", {
    title: "Add user"
  });
}

exports.newUsernamePost =  async function(req,res){
  const {user} = req.body;
  await db.insertUsername(user);
  res.redirect("/");
}