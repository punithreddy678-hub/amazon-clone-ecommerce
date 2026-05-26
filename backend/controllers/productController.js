const db = require("../config/db");

// ADD PRODUCT

exports.addProduct = (req,res)=>{

    const {

        title,
        description,
        price,
        image,
        category,
        stock

    } = req.body;

    const sql = `
        INSERT INTO products
        (title,description,price,image,category,stock)
        VALUES(?,?,?,?,?,?)
    `;

    db.query(

        sql,

        [
            title,
            description,
            price,
            image,
            category,
            stock
        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Product Added"
            });

        }

    );

};

// GET PRODUCTS

exports.getProducts = (req,res)=>{

    const sql =
        "SELECT * FROM products";

    db.query(sql,(err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json(result);

    });

};

// DELETE PRODUCT

exports.deleteProduct = (req,res)=>{

    const productId = req.params.id;

    const sql =
        "DELETE FROM products WHERE id=?";

    db.query(sql,[productId],(err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({
            message:"Product Deleted"
        });

    });

};
exports.updateProduct = (req,res)=>{

    const productId = req.params.id;

    const {

        title,
        description,
        price,
        image,
        category,
        stock

    } = req.body;

    const sql = `
        UPDATE products
        SET
        title=?,
        description=?,
        price=?,
        image=?,
        category=?,
        stock=?
        WHERE id=?
    `;

    db.query(

        sql,

        [
            title,
            description,
            price,
            image,
            category,
            stock,
            productId
        ],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json({
                message:"Product Updated"
            });

        }

    );

};