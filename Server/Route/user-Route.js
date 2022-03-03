const userRouter = require("express").Router();
const usersController = require("../Controller/userController");
userRouter.post("/", usersController.register);
module.exports = userRouter;