const db = require("../config/db");

// ADD TO WISHLIST

exports.addToWishlist = (req,res)=>{

    const userId = req.user.id;

    const { productId } = req.body;

    const sql = `
        INSERT INTO wishlist
        (userId,productId)
        VALUES(?,?)
    `;

    db.query(

        sql,

        [
            userId,
            productId
        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Added To Wishlist"
            });

        }

    );

};

// GET WISHLIST

exports.getWishlist = (req,res)=>{

    const sql = `
        SELECT
        wishlist.id,
        products.title,
        products.price,
        products.image

        FROM wishlist

        JOIN products
        ON wishlist.productId = products.id

        WHERE wishlist.userId = ?
    `;

    db.query(

        sql,

        [req.user.id],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json(result);

        }

    );

};