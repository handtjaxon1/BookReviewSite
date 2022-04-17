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
        type: Number
    },
    image: {
        type: Buffer,
        contentType: String
    }
    // We don't actually need this because the review model has a book object ID so we can just get all reviews with a matching ID
    // I'm preferring to do it this way because reviews can grow unbounded, so if we store them all in a single book then it can
    // lead to performance issues. 
    // Also reviews can be referred to from a user, not just a book, so it makes sense to separate it out form books
    // reviews: {
    //     type: [String], // TODO Replace with the object type of the ReviewSchema
    //     default: []
    // }
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema);