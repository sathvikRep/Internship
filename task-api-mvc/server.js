const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import routes
const taskRoutes = require("./routes/taskRoutes");

// Use routes
app.use("/tasks", taskRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("📝 MVC Task API Running");
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