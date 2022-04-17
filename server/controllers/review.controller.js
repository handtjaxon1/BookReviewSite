const Review = require("../models/review.model");

module.exports = {
    // Create a review
    createReview: (request, response) => {
        Review.create(request,body)
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Get a review by ID
    getReviewById: (request, response) => {
        Review.findOne({ _id: request.params.id })
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Get all reviews
    getReviews: (request, response) => {
        Review.find({})
            .then((reviews) => {
                response.json(reviews);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Get all reviews by user Id
    getReviewsByUser: (request, response) => {
        Review.find({ reviewer: request.params.userId })
            .then((reviews) => {
                response.json(reviews);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Get all reviews by book Id
    getReviewsByBook: (request, response) => {
        Review.find({ book: request.params.bookId })
            .then((reviews) => {
                response.json(reviews);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Edit/update a review
    updateReview: (request, response) => {
        Review.findOneAndUpdate({ _id: request.params.id }, request,body, { new: true, runValidators: true })
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    // Delete a review
    deleteReview: (request, response) => {
        Review.deleteOne({ _id: request.params.id })
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    }
}