require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

/* ROUTES */

const authRoutes =
    require("./routes/authRoutes");

const productRoutes =
    require("./routes/productRoutes");

const orderRoutes =
    require("./routes/orderRoutes");

const reviewRoutes =
    require("./routes/reviewRoutes");

const wishlistRoutes =
    require("./routes/wishlistRoutes");

/* API */

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/reviews", reviewRoutes);

app.use("/api/wishlist", wishlistRoutes);

/* HOME */

app.get("/", (req,res)=>{

    res.send("ShopX Backend Running");

});

/* PORT */

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(
        `Server Running On ${PORT}`
    );

});