const BookController = require("../controllers/book.controller");
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/image.middleware");

module.exports = (app) => {
    app.post("/api/books", upload.single('file'), BookController.createBook);
    app.get("/api/books", BookController.getBooks);
    app.get("/api/books/:id", BookController.getBook);
    app.put("/api/books/:id", BookController.updateBook);
    app.delete("/api/books/:id", BookController.deleteBook);
}