const express = require ('express')
const router = express.Router ();
//load topsellModel
const topsellModel= require ("../models/topsell");
router.get("/package",(req,res)=>{
   
    res.render("package",{
        title:"Top Sells",
        package : topsellModel.getAllTopsells()

    });

});

module.exports = router;