const express = require("express");

const router = express.Router();

const {
    addReview,
    getReviews
} = require("../controllers/reviewController");

// GET REVIEWS
router.get("/:productId", getReviews);

// ADD REVIEW
router.post("/", addReview);

module.exports = router;