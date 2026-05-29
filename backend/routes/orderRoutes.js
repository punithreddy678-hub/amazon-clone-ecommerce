const express = require("express");

const router = express.Router();

const db = require("../config/db");

const auth = require("../middleware/authMiddleware");

/* ADD ORDER */

router.post("/",auth,(req,res)=>{

    const {
        product_name,
        product_price,
        product_image
    } = req.body;

    db.query(
        "INSERT INTO orders(user_id,product_name,product_price,product_image) VALUES(?,?,?,?)",
        [
            req.user.id,
            product_name,
            product_price,
            product_image
        ],
        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Order Saved"
            });

        }
    );

});

/* GET USER ORDERS */

router.get("/",auth,(req,res)=>{

    db.query(
        "SELECT * FROM orders WHERE user_id=? ORDER BY id DESC",
        [req.user.id],
        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json(result);

        }
    );

});

module.exports = router;