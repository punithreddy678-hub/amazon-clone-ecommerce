const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const mysql = require("mysql2");

/* DATABASE */

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

/* AUTH MIDDLEWARE */

function auth(req,res,next){

    const token =
    req.headers.authorization;

    if(!token){

        return res.status(401).json({
            message:"No Token"
        });
    }

    try{

        const decoded =
        jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    }catch(err){

        res.status(401).json({
            message:"Invalid Token"
        });
    }
}

/* =========================================
   PLACE ORDER
========================================= */

router.post("/", auth, (req,res)=>{

    const {

        product_name,
        product_price,
        product_image

    } = req.body;

    const user_id =
    req.user.id;

    const sql = `
    INSERT INTO orders
    (
        user_id,
        product_name,
        product_price,
        product_image
    )
    VALUES (?,?,?,?)
    `;

    db.query(

        sql,

        [
            user_id,
            product_name,
            product_price,
            product_image
        ],

        (err,result)=>{

            if(err){

                console.log(err);

                return res.status(500).json({
                    message:"Database Error"
                });
            }

            res.json({
                success:true,
                message:"Order Placed"
            });

        }
    );

});

/* =========================================
   GET USER ORDERS
========================================= */

router.get("/", auth, (req,res)=>{

    const sql = `
    SELECT *
    FROM orders
    WHERE user_id=?
    ORDER BY id DESC
    `;

    db.query(

        sql,

        [req.user.id],

        (err,result)=>{

            if(err){

                return res.status(500).json({
                    message:"Database Error"
                });
            }

            res.json(result);

        }
    );

});

module.exports = router;