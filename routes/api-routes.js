const express = require("express");
const mongoose = require('mongoose');
const db = require("../models");
const router = express.Router();

router.get("/articles", (req, res)=>{
    res.sendFile(__dirname, "clent/build/index.html")
});

// router.get("/articles", (req, res)=>{
//     db.Articles.find({}).then(article=>{
//         console.log(article);
//         res.send(article);
//     })

// });

module.exports = router;