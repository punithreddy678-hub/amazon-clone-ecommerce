const express = require("express");

const router = express.Router();

const {

    createOrder,
    getOrders

} = require("../controllers/orderController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

router.post(
    "/create",
    verifyToken,
    createOrder
);

router.get(
    "/my-orders",
    verifyToken,
    getOrders
);

module.exports = router;