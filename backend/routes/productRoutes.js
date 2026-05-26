const express = require("express");

const router = express.Router();

const {

    addProduct,
    getProducts,
    updateProduct,
    deleteProduct

} = require("../controllers/productController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

const {
    isAdmin
} = require("../middleware/adminMiddleware");

// ADD PRODUCT

router.post(
    "/add",
    verifyToken,
    isAdmin,
    addProduct
);

// GET PRODUCTS

router.get("/", getProducts);

// DELETE PRODUCT

router.delete(
    "/:id",
    verifyToken,
    isAdmin,
    deleteProduct
);
router.put(
    "/:id",
    verifyToken,
    isAdmin,
    updateProduct
);
module.exports = router;