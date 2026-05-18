const express = require("express");

const {
  addTimetable,
  getTimetable,
} = require("../Controllers/timetableController");

const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();


// CREATE TIMETABLE ENTRY
router.post("/", verifyToken, addTimetable);


// GET TIMETABLE
router.get("/", verifyToken, getTimetable);

module.exports = router;