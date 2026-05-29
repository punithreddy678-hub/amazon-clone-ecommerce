require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mysql = require("mysql2");

const app = express();

/* =========================================
   MIDDLEWARE
========================================= */

app.use(cors());

app.use(express.json());

/* =========================================
   DATABASE CONNECTION
========================================= */

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME,

    port: process.env.DB_PORT,

    ssl:{
        rejectUnauthorized:false
    }

});

db.connect((err)=>{

    if(err){

        console.log(
            "Database Error:",
            err
        );

    }else{

        console.log(
            "MySQL Connected 🚀"
        );

    }

});

/* =========================================
   EXPORT DATABASE
========================================= */

module.exports = db;

/* =========================================
   ROUTES
========================================= */

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

const chatbotRoutes =
require("./routes/chatbotRoutes");

/* =========================================
   API ROUTES
========================================= */

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/products",
    productRoutes
);

app.use(
    "/api/orders",
    orderRoutes
);

app.use(
    "/api/reviews",
    reviewRoutes
);

app.use(
    "/api/wishlist",
    wishlistRoutes
);

app.use(
    "/api/chatbot",
    chatbotRoutes
);

/* =========================================
   HOME API
========================================= */

app.get("/", (req,res)=>{

    res.json({

        success:true,

        message:
        "ShopX Backend Running 🚀"

    });

});

/* =========================================
   TEST PRODUCTS API
========================================= */

app.get(
    "/api/test-products",
    (req,res)=>{

        res.json([

            {
                id:1,
                name:"Sony WH-1000XM5",
                price:29999,
                image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200"
            },

            {
                id:2,
                name:"JBL Flip 6",
                price:8999,
                image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200"
            },

            {
                id:3,
                name:"Apple AirPods Pro",
                price:24999,
                image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200"
            }

        ]);

});

/* =========================================
   SERVER
========================================= */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(
        `Server Running On ${PORT}`
    );

});