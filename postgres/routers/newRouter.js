const { Router } = require("express");
const newController = require("../controllers/newController");
const newRouter = Router();

newRouter.get("/", newController.newUsernameGet);
newRouter.post("/", newController.newUsernamePost);

module.exports = newRouter;