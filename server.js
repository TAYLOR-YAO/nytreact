
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/api-routes.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./models");
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/nytreact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", router);

app.listen(PORT, () =>{
  console.log("App listening on PORT " + PORT);
});