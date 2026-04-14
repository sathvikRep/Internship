const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "Atomic Habits", authorId: 1 },
  { id: 2, title: "Clean Code", authorId: 2 }
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET single book
router.get("/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

// POST add book
router.post("/", (req, res) => {
  const newBook = {
    id: Date.now(),
    title: req.body.title,
    authorId: req.body.authorId
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
router.put("/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");

  book.title = req.body.title || book.title;
  book.authorId = req.body.authorId || book.authorId;

  res.json(book);
});

// DELETE book
router.delete("/:id", (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.send("Book deleted");
});

module.exports = router;