const express = require("express");

const router = express.Router();

const {

    addToWishlist,
    getWishlist

} = require("../controllers/wishlistController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

// ADD TO WISHLIST

router.post(
    "/add",
    verifyToken,
    addToWishlist
);

// GET WISHLIST

router.get(
    "/",
    verifyToken,
    getWishlist
);

module.exports = router;