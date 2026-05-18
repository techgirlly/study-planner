const {
  createTimetable,
  getTimetableByUser,
} = require("../models/timetableModel");


// CREATE TIMETABLE ENTRY
const addTimetable = (req, res) => {

  const {
    subject,
    day,
    start_time,
    end_time,
  } = req.body;

  const user_id = req.user.id;

  createTimetable(
    user_id,
    subject,
    day,
    start_time,
    end_time,
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Timetable entry created successfully",
      });
    }
  );
};


// GET USER TIMETABLE
const getTimetable = (req, res) => {

  const user_id = req.user.id;

  getTimetableByUser(user_id, (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(results);
  });
};

module.exports = {
  addTimetable,
  getTimetable,
};