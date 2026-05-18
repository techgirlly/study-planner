const express = require("express");

const {
  register,
  login,
} = require("../Controllers/authControllers");

const router = express.Router();


// REGISTER ROUTE
router.post("/register", register);


// LOGIN ROUTE
router.post("/login", login);

module.exports = router;


