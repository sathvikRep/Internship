const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

// Use routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("📚 Welcome to Bookstore API");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});