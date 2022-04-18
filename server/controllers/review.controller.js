const Review = require("../models/review.model");

function checkAuthentication(req, res) {
    if (!req.userId) return res.json({ message: "Unauthenticated. Unable to create review." });
};

module.exports = {
    // Create a review
    createReview: (request, response) => {
        // checkAuthentication(request, response);
        Review.create(request.body)
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    // Get a review by ID
    getReviewById: (request, response) => {
        console.log("Get single review");
        Review.findOne({ _id: request.params.id })
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
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
            })
    },
    // Get all reviews by user Id
    getReviewsByUser: (request, response) => {
        Review.find({ userId: request.params.userId })
            .then((reviews) => {
                response.json(reviews);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    // Get all reviews by book Id
    getReviewsByBook: (request, response) => {
        Review.find({ bookId: request.params.bookId })
            .then((reviews) => {
                response.json(reviews);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    // Edit/update a review
    updateReview: (request, response) => {
        // checkAuthentication(request, response);
        Review.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    // Delete a review
    deleteReview: (request, response) => {
        // checkAuthentication(request, response);
        Review.deleteOne({ _id: request.params.id })
            .then((review) => {
                response.json(review);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}