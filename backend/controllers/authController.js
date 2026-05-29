const db = require("../config/db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* REGISTER */

exports.registerUser = async (req,res)=>{

    const {
        name,
        email,
        password
    } = req.body;

    try{

        const hashedPassword =
            await bcrypt.hash(password,10);

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
            (err,result)=>{

                if(err){

                    return res.status(500).json({
                        message:"User Exists"
                    });

                }

                res.json({
                    message:"Registration Successful"
                });

            }
        );

    }catch(error){

        res.status(500).json({
            message:"Server Error"
        });

    }

};

/* LOGIN */

exports.loginUser = (req,res)=>{

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
        async (err,result)=>{

            if(err){

                return res.status(500).json({
                    message:"Server Error"
                });

            }

            if(result.length === 0){

                return res.status(400).json({
                    message:"User Not Found"
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

                return res.status(400).json({
                    message:"Invalid Password"
                });

            }

            const token =
                jwt.sign(

                    {
                        id:user.id,
                        role:user.role
                    },

                    process.env.JWT_SECRET,

                    {
                        expiresIn:"7d"
                    }

                );

            res.json({

                token,

                user:{

                    id:user.id,

                    name:user.name,

                    email:user.email,

                    role:user.role

                }

            });

        }
    );

};