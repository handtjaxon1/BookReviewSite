const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required."],
    },
    author: {
        type: String,
        required: [true, "Author name is required."],
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
        min: 1.0,
        max: 5.0,
        default: 5.0
    }
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema);