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
            "MySQL Connected"
        );
    }
});

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
   TEST API
========================================= */

app.get("/", (req,res)=>{

    res.json({

        success:true,

        message:
        "ShopX Backend Running 🚀"
    });

});

/* =========================================
   PRODUCTS TEST
========================================= */

app.get(
    "/api/test-products",
    (req,res)=>{

    res.json([

        {
            id:1,
            name:"Sony WH-1000XM5",
            price:29999
        },

        {
            id:2,
            name:"JBL Flip 6",
            price:8999
        },

        {
            id:3,
            name:"Apple AirPods Pro",
            price:24999
        }

    ]);
});

/* =========================================
   PORT
========================================= */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(

        `Server Running On ${PORT}`

    );
});