const db = require("../config/db");

// ADD REVIEW
exports.addReview = (req, res) => {

    const {
        product_id,
        user_name,
        rating,
        comment
    } = req.body;

    const sql =
        "INSERT INTO reviews (product_id, user_name, rating, comment) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [product_id, user_name, rating, comment],
        (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: "Review Added"
            });

        }
    );

};

// GET REVIEWS
exports.getReviews = (req, res) => {

    const sql =
        "SELECT * FROM reviews WHERE product_id=?";

    db.query(
        sql,
        [req.params.productId],
        (err, results) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(results);

        }
    );

};