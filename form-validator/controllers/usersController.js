// controllers/usersController.js
const usersStorage = require("../storages/usersStorage");

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

//form validation

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email").trim(),
  body("age")
    .optional({ checkFalsy: true })
    .trim()
    .isInt({ min: 18, max: 120 })
    .withMessage(`Age must be a number between 18 and 120`),
  body("bio")
    .optional()
    .trim()
    .isLength({ min: 0, max: 200 })
    .withMessage(`Bio needs to be under 200 characters`),
];

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const { firstName, lastName, email, age, bio } = req.body;
    console.log("validate?");
    console.log(age);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).render("createUser", {
        title: "Create User",
        errors: errors.array(),
      });
    }
    
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];

//update

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  },
];

//delete

// Tell the server to delete a matching user, if any. Otherwise, respond with an error.
exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

exports.usersSearchGet = (req, res) => {
  console.log("poop");
  const { search} = req.query;
  const users = usersStorage.findUsers(search);
  console.log(users);
  res.render("search", {
    title: "Found Users",
    users,
  });
};