function getAllBooks(req, res) {
  console.log(req.dbClient);
  req.dbClient.books.findMany().then((allBooks) => {
    res.json(allBooks);
  });
}
function addBook(req, res) {
  const newBook = req.body;
  req.dbClient.books.create({ data: newBook }).then((newBook) => {
    res.json(newBook);
  });
}

module.exports = {
  getAllBooks,
  addBook,
};
