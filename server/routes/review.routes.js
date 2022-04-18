const ReviewController = require("../controllers/review.controller");
const auth = require("../middleware/auth.middleware")

module.exports = (app) => {
    app.post("/api/reviews", ReviewController.createReview);
    app.get("/api/reviews", ReviewController.getReviews);
    app.get("/api/reviews/user/:userId", ReviewController.getReviewsByUser);
    app.get("/api/reviews/book/:bookId", ReviewController.getReviewsByBook);
    app.get("/api/reviews/:id", ReviewController.getReviewById);
    app.put("/api/reviews/:id", ReviewController.updateReview);
    app.put("/api/reviews/:id", ReviewController.deleteReview);
}