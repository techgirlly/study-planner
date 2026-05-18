const db = require("../config/db");


// CREATE TIMETABLE ENTRY
const createTimetable = (
  user_id,
  subject,
  day,
  start_time,
  end_time,
  callback
) => {

  const sql = `
    INSERT INTO timetable
    (user_id, subject, day, start_time, end_time)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [user_id, subject, day, start_time, end_time],
    callback
  );
};


// GET USER TIMETABLE
const getTimetableByUser = (
  user_id,
  callback
) => {

  const sql =
    "SELECT * FROM timetable WHERE user_id = ?";

  db.query(sql, [user_id], callback);
};

module.exports = {
  createTimetable,
  getTimetableByUser,
};