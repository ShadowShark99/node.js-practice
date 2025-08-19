const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.usersGet);
indexRouter.get("/search", indexController.searchGet);


module.exports = indexRouter;