let tasks = [
  { id: 1, title: "Learn MVC", completed: false },
  { id: 2, title: "Refactor API", completed: true }
];

// Get all tasks
const getAllTasks = () => tasks;

// Get task by ID
const getTaskById = (id) => tasks.find(t => t.id == id);

// Create task
const createTask = (title) => {
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
  return newTask;
};

// Update task
const updateTask = (id, data) => {
  const task = tasks.find(t => t.id == id);
  if (!task) return null;

  task.title = data.title ?? task.title;
  task.completed = data.completed ?? task.completed;

  return task;
};

// Delete task
const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};