const express = require("express");

const { getAllBooks, addBook } = require("./controller");

const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);

bookRouter.post("/", addBook);

module.exports = bookRouter;
