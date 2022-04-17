const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    // UserId gets set by a form automatically to the id of the user reviewing the book
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    // BookId gets set by a form automatically to the id of the book being reviewed
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
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