const express = require("express");

const router = express.Router();

const {
    addToWishlist,
    getWishlist,
    removeFromWishlist
} = require("../controllers/wishlistController");

router.get("/", getWishlist);

router.post("/", addToWishlist);

router.delete("/:id", removeFromWishlist);

module.exports = router;