const express = require("express");

const router = express.Router();

const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

/* =========================================
   DATABASE
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

/* =========================================
   AUTH MIDDLEWARE
========================================= */

function auth(req,res,next){

    const token =
    req.headers.authorization;

    if(!token){

        return res.status(401).json({

            message:"No Token"
        });
    }

    try{

        const verified =
        jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = verified;

        next();

    }catch(error){

        res.status(401).json({

            message:"Invalid Token"
        });
    }
}

/* =========================================
   ADD TO WISHLIST
========================================= */

router.post("/", auth, (req,res)=>{

    const {

        id,

        name,

        price,

        image

    } = req.body;

    /* CHECK DUPLICATE */

    const checkQuery = `
    SELECT * FROM wishlist
    WHERE user_id = ?
    AND product_id = ?
    `;

    db.query(

        checkQuery,

        [

            req.user.id,

            id

        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);
            }

            if(result.length > 0){

                return res.status(400).json({

                    message:
                    "Already In Wishlist"
                });
            }

            /* INSERT */

            const insertQuery = `
            INSERT INTO wishlist
            (
                user_id,
                product_id,
                product_name,
                product_price,
                product_image
            )
            VALUES(?,?,?,?,?)
            `;

            db.query(

                insertQuery,

                [

                    req.user.id,

                    id,

                    name,

                    price,

                    image

                ],

                (err,data)=>{

                    if(err){

                        return res.status(500).json(err);
                    }

                    res.json({

                        success:true,

                        message:
                        "Added To Wishlist ❤️"
                    });
                }
            );
        }
    );
});

/* =========================================
   GET USER WISHLIST
========================================= */

router.get("/", auth, (req,res)=>{

    const query = `
    SELECT * FROM wishlist
    WHERE user_id = ?
    ORDER BY id DESC
    `;

    db.query(

        query,

        [req.user.id],

        (err,data)=>{

            if(err){

                return res.status(500).json(err);
            }

            res.json(data);
        }
    );
});

/* =========================================
   DELETE WISHLIST ITEM
========================================= */

router.delete("/:id", auth, (req,res)=>{

    const query = `
    DELETE FROM wishlist
    WHERE product_id = ?
    AND user_id = ?
    `;

    db.query(

        query,

        [

            req.params.id,

            req.user.id

        ],

        (err,data)=>{

            if(err){

                return res.status(500).json(err);
            }

            res.json({

                success:true,

                message:
                "Removed From Wishlist"
            });
        }
    );
});

module.exports = router;