const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required."],
        minlength: [3, "Book title must be a minimum of 3 characters."],
    },
    author: {
        type: String,
        required: [true, "Author name is required."],
        minlength: [3, "Author name must be a minimum of 3 characters."]
    },
    genre: {
        type: String,
        required: [true, "Genre is required. Please select one."],
    },
    description: {
        type: String,
        required: [true, "A description of the book is required."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
});

module.exports = mongoose.model("Book", BookSchema);