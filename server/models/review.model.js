const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    // Reviewer prefills to the id of the user reviewing the book
    reviewer: {
        type: ObjectId,
        required: true
    },
    // Book prefills to the id of the book being reviewed
    book: {
        type: ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: [true, "The review must have a rating from 1 to 5"],
        min: 1.0,
        max: 5.0,
        default: 5.0
    },
    body: {
        type: String,
        required: [true, "The review must have some text."]
    }
}, { timestampes: true });

module.exports = mongoose.model("Review", ReviewSchema);
module.exports = ReviewSchema;