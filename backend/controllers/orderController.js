const db = require("../config/db");

exports.createOrder = (req,res)=>{

    const {
        total,
        payment_method
    } = req.body;

    const user_id =
        req.user.id;

    const sql = `
        INSERT INTO orders
        (user_id,total,payment_method)
        VALUES(?,?,?)
    `;

    db.query(
        sql,
        [
            user_id,
            total,
            payment_method
        ],
        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Order Placed"
            });

        }
    );

};