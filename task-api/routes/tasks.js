const express = require("express");
const router = express.Router();

// In-memory data (temporary database)
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build Task API", completed: true }
];


//  1. GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});


//  2. GET single task
router.get("/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  res.json(task);
});


// ✅ 3. CREATE task
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("Title is required");
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});


//  4. UPDATE task
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});


//  5. DELETE task
router.delete("/:id", (req, res) => {
  const exists = tasks.some(t => t.id == req.params.id);

  if (!exists) {
    return res.status(404).send("Task not found");
  }

  tasks = tasks.filter(t => t.id != req.params.id);

  res.send("Task deleted");
});

module.exports = router;