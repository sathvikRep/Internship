const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("🏠 Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("📘 About Us Page");
});

app.get("/contact", (req, res) => {
  res.send("📞 Contact Page");
});

// 404 route
app.use((req, res) => {
  res.status(404).send("❌ Page Not Found");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});