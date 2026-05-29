const express = require("express");

const router = express.Router();

router.post("/", async(req,res)=>{

    try{

        const { message } = req.body;

        res.json({

            reply:
            `AI Response: ${message}`

        });

    }catch(error){

        res.status(500).json({

            error:"AI Error"

        });
    }
});

module.exports = router;