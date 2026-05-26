const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

dotenv.config();

const app = express();

// MIDDLEWARE

app.use(cors());

app.use(express.json());

// DATABASE CONNECTION

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME,

    port: process.env.DB_PORT

});

db.connect((err) => {

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

// TEST ROUTE

app.get("/", (req, res) => {

    res.json({

        message:
            "ShopX Backend Running"

    });

});

// =========================
// REGISTER
// =========================

app.post(
    "/api/auth/register",
    async (req, res) => {

        try{

            const {
                name,
                email,
                password
            } = req.body;

            const hashedPassword =
                await bcrypt.hash(
                    password,
                    10
                );

            const sql = `
                INSERT INTO users
                (name,email,password)
                VALUES(?,?,?)
            `;

            db.query(

                sql,

                [
                    name,
                    email,
                    hashedPassword
                ],

                (err, result) => {

                    if(err){

                        return res.status(500)
                        .json(err);

                    }

                    res.json({

                        message:
                            "User Registered"

                    });

                }

            );

        }catch(error){

            res.status(500).json(error);

        }

    }
);

// =========================
// LOGIN
// =========================

app.post(
    "/api/auth/login",
    (req, res) => {

        const {
            email,
            password
        } = req.body;

        const sql = `
            SELECT * FROM users
            WHERE email=?
        `;

        db.query(

            sql,

            [email],

            async (err, result) => {

                if(err){

                    return res
                    .status(500)
                    .json(err);

                }

                if(result.length === 0){

                    return res
                    .status(401)
                    .json({

                        message:
                            "User Not Found"

                    });

                }

                const user =
                    result[0];

                const validPassword =
                    await bcrypt.compare(

                        password,

                        user.password

                    );

                if(!validPassword){

                    return res
                    .status(401)
                    .json({

                        message:
                            "Invalid Password"

                    });

                }

                const token =
                    jwt.sign(

                        {

                            id: user.id,
                            role: user.role

                        },

                        process.env.JWT_SECRET,

                        {

                            expiresIn: "7d"

                        }

                    );

                res.json({

                    message:
                        "Login Successful",

                    token

                });

            }

        );

    }
);

// =========================
// AUTH MIDDLEWARE
// =========================

function verifyToken(
    req,
    res,
    next
){

    const token =
        req.headers.authorization;

    if(!token){

        return res.status(401)
        .json({

            message:
                "No Token Provided"

        });

    }

    try{

        const verified =
            jwt.verify(

                token.split(" ")[1],

                process.env.JWT_SECRET
            );

        req.user = verified;

        next();

    }catch(error){

        res.status(401).json({

            message:
                "Invalid Token"

        });

    }

}

// =========================
// ADD PRODUCT
// =========================

app.post(
    "/api/products/add",
    verifyToken,
    (req, res) => {

        const {
            name,
            price,
            image,
            category,
            description
        } = req.body;

        const sql = `
            INSERT INTO products
            (name,price,image,category,description)
            VALUES(?,?,?,?,?)
        `;

        db.query(

            sql,

            [
                name,
                price,
                image,
                category,
                description
            ],

            (err, result) => {

                if(err){

                    return res
                    .status(500)
                    .json(err);

                }

                res.json({

                    message:
                        "Product Added"

                });

            }

        );

    }
);

// =========================
// GET PRODUCTS
// =========================

app.get(
    "/api/products",
    (req, res) => {

        const sql =
            "SELECT * FROM products";

        db.query(

            sql,

            (err, result) => {

                if(err){

                    return res
                    .status(500)
                    .json(err);

                }

                res.json(result);

            }

        );

    }
);

// =========================
// CREATE ORDER
// =========================

app.post(
    "/api/orders/create",
    verifyToken,
    (req, res) => {

        const {
            total,
            payment_method
        } = req.body;

        const sql = `
            INSERT INTO orders
            (user_id,total,payment_method)
            VALUES(?,?,?)
        `;

        db.query(

            sql,

            [
                req.user.id,
                total,
                payment_method
            ],

            (err, result) => {

                if(err){

                    return res
                    .status(500)
                    .json(err);

                }

                res.json({

                    message:
                        "Order Created"

                });

            }

        );

    }
);

// =========================
// WISHLIST
// =========================

app.post(
    "/api/wishlist/add",
    verifyToken,
    (req, res) => {

        const {
            product_id
        } = req.body;

        const sql = `
            INSERT INTO wishlist
            (user_id,product_id)
            VALUES(?,?)
        `;

        db.query(

            sql,

            [
                req.user.id,
                product_id
            ],

            (err, result) => {

                if(err){

                    return res
                    .status(500)
                    .json(err);

                }

                res.json({

                    message:
                        "Added To Wishlist"

                });

            }

        );

    }
);

// =========================
// START SERVER
// =========================

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(

        "Server running on port",
        PORT

    );

});