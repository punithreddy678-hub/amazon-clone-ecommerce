const db = require("../config/db");

// CREATE ORDER

exports.createOrder = (req,res)=>{

    const userId = req.user.id;

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
            userId,
            total,
            payment_method
        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Order Created"
            });

        }

    );

};

// GET USER ORDERS

exports.getOrders = (req,res)=>{

    const sql = `
        SELECT * FROM orders
        WHERE user_id=?
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