const Book = require("../models/book.model");

function checkAuthentication(req, res) {
    if (!req.userId) return res.json({ message: "Unauthenticated. Unable to create review." });
};

module.exports = {
    // Create a book
    createBook: (request, response) => {
        checkAuthentication(request, response);
        Book.create(request.body)
            .then((book) => {
                response.json(book);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Get all books
    getBooks: (request, response) => {
        Book.find({})
            .then((books) => {
                response.json(books);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Get one book
    getBook: (request, response) => {
        Book.findOne({ _id: request.params.id })
        .then((book) => {
            response.json(book);
        })
        .catch((error) => {
            console.log(error);
            response.status(404).json(error);
        })
    },
    // Edit/update a book
    updateBook: (request, response) => {
        checkAuthentication(request, response);
        Book.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then((book) => {
            response.json(book);
        })
        .catch((error) => {
            console.log(error);
            response.status(404).json(error);
        })
    },
    // Delete a book
    deleteBook: (request, response) => {
        checkAuthentication(request, response);
        Book.deleteOne({ _id: request.params.id })
        .then((book) => {
            response.json(book);
        })
        .catch((error) => {
            console.log(error);
            response.status(404).json(error);
        })
    }
};