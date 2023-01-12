const express = require("express");
const { hashPassword, verifyPassword } = require("../auth");
const userControllers = require("./controllers/userControllers");
const middlewares = require("./services/middlewares");

const router = express.Router();

router.post(
  "/register",
  hashPassword,
  middlewares.getUrlImageByEmail,
  userControllers.addUser
);

router.post("/login", verifyPassword, userControllers.displayUser);

module.exports = router;
