const taskModel = require("../models/taskModel");

// GET all tasks
exports.getTasks = (req, res) => {
  res.json(taskModel.getAllTasks());
};

// GET single task
exports.getTask = (req, res) => {
  const task = taskModel.getTaskById(req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  res.json(task);
};

// CREATE task
exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("Title is required");
  }

  const newTask = taskModel.createTask(title);
  res.status(201).json(newTask);
};

// UPDATE task
exports.updateTask = (req, res) => {
  const updated = taskModel.updateTask(req.params.id, req.body);

  if (!updated) {
    return res.status(404).send("Task not found");
  }

  res.json(updated);
};

// DELETE task
exports.deleteTask = (req, res) => {
  const success = taskModel.deleteTask(req.params.id);

  if (!success) {
    return res.status(404).send("Task not found");
  }

  res.send("Task deleted");
};