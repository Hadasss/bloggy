const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(
    `mongodb+srv://hadas:${process.env.MONGO_PASSWORD}@node-angular.8yo93.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => console.log(error));

module.exports = app;
