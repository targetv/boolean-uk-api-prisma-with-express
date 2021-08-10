const express = require("express");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");
const bookRouter = require("./resources/books/router");

const dbClient = new PrismaClient();

const app = express();

// Middle Ware
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  req.dbClient = dbClient;
  next();
});

app.use("/books", bookRouter);

// app.get("*", (req, res) => {
//   res.json("First get request");
// });

app.listen(4000, () => {
  console.log("Server is starting");
});
