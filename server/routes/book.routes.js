const BookController = require("../controllers/book.controller");

module.exports = (app) => {
    app.post("/api/books", BookController.createBook);
    app.get("/api/books", BookController.getBooks);
    app.get("/api/books/:id", BookController.getBook);
    app.put("/api/books/:id", BookController.updateBook);
    app.delete("/api/books/:id", BookController.deleteBook);
}