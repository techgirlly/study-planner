const db = require("../config/db");


// CREATE TASK
const createTask = (
  user_id,
  title,
  description,
  deadline,
  callback
) => {
  const sql =
    "INSERT INTO tasks (user_id, title, description, deadline) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [user_id, title, description, deadline],
    callback
  );
};


// GET USER TASKS
const getTasksByUser = (user_id, callback) => {
  const sql =
    "SELECT * FROM tasks WHERE user_id = ?";

  db.query(sql, [user_id], callback);
};

module.exports = {
  createTask,
  getTasksByUser,
};