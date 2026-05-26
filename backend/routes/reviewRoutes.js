const express = require("express");

const router = express.Router();

const {

    addReview,
    getReviews

} = require("../controllers/reviewController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

// ADD REVIEW

router.post(
    "/add",
    verifyToken,
    addReview
);

// GET REVIEWS

router.get(
    "/:productId",
    getReviews
);

module.exports = router;