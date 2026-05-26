const express = require("express");

const cors = require("cors");

require("dotenv").config();

const db = require("./config/db");

const authRoutes =
    require("./routes/authRoutes");

const productRoutes =
    require("./routes/productRoutes");
    const orderRoutes =
    require("./routes/orderRoutes");
    const wishlistRoutes =
    require("./routes/wishlistRoutes");
    const reviewRoutes =
    require("./routes/reviewRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// ROUTES

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.get("/", (req,res)=>{

    res.send("E-Commerce API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});