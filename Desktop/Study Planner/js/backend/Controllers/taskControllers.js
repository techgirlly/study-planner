const {
  createTask,
  getTasksByUser,
} = require("../models/taskModel");


// CREATE TASK
const addTask = (req, res) => {

  const { title, description, Deadline } = req.body;

  const user_id = req.user.id;

  createTask(
    user_id,
    title,
    description,
    Deadline,
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Task created successfully",
      });
    }
  );
};


// GET TASKS
const getTasks = (req, res) => {

  const user_id = req.user.id;

  getTasksByUser(user_id, (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(results);
  });
};

module.exports = {
  addTask,
  getTasks,
};