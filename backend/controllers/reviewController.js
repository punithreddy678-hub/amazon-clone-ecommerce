const db = require("../config/db");

// ADD REVIEW

exports.addReview = (req,res)=>{

    const userId = req.user.id;

    const {

        productId,
        rating,
        comment

    } = req.body;

    const sql = `
        INSERT INTO reviews
        (userId,productId,rating,comment)
        VALUES(?,?,?,?)
    `;

    db.query(

        sql,

        [
            userId,
            productId,
            rating,
            comment
        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Review Added"
            });

        }

    );

};

// GET REVIEWS

exports.getReviews = (req,res)=>{

    const sql = `
        SELECT
        reviews.rating,
        reviews.comment,
        users.name

        FROM reviews

        JOIN users
        ON reviews.userId = users.id

        WHERE productId=?
    `;

    db.query(

        sql,

        [req.params.productId],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json(result);

        }

    );

};