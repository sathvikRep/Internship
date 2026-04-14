const express = require("express");
const app = express();

// Middleware (IMPORTANT)
app.use(express.json());

// Import routes
const taskRoutes = require("./routes/tasks");

// Use routes
app.use("/tasks", taskRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("📝 Task API is running");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("❌ Route not found");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});