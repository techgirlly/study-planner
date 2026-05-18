
const express = require("express");

const {
  addTask,
  getTasks,
} = require("../Controllers/taskControllers");

const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();


// CREATE TASK
router.post("/", verifyToken, addTask);


// GET TASKS
router.get("/", verifyToken, getTasks);

module.exports = router;

