const express = require("express");
const mongoose = require('mongoose');
const Articles = require("../models/Articles");
const router = express.Router();

router.get("/", (req, res)=>{
    res.sendFile(__dirname, "clent/build/index.html")
});

router.post("/articles", (req, res)=>{
    Articles.create(req.body).then(article=>{
        console.log(article);
    }).catch(err=>console.log(err))
});

router.get("/articles", (req, res)=>{
    Articles.find({}).then(article=>{
        // console.log(article);
        res.json(article);
    });
});
// router.post("/articles", (req, res)=>{
//     Articles.remove().then(article=>{
//         console.log("succesfuly Deleted!");
//     });
// });


module.exports = router;