const express = require("express");
const { hashPassword, verifyPassword } = require("../auth");
const userControllers = require("./controllers/userControllers");

const router = express.Router();

router.post("/register", hashPassword, userControllers.addUser);

router.post("/login", verifyPassword, userControllers.displayUser);

module.exports = router;
