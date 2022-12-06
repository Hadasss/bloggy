const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Topic = require("./models/topic");

const app = express();

mongoose
  .connect(
    `mongodb+srv://hadas:${process.env.MONGO_PASSWORD}@node-angular.8yo93.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => console.log(error));

// CRUD routes
// TODO GET all topics from db
app.get("/api/topics", (req, res) => {
  Topic.find()
    .then((topics) => {
      res.status(200).json({ message: "Topics sent successfully" });
      topics: topics;
    })
    .catch((error) => console.log(error));
});

// TODO POST topic
app.post("/api/topics", (req, res) => {
  const topic = new Topic({
    title: req.body.title,
  });
  this.post
    .save()
    .then((createdTopic) => console.log(createdTopic))
    .res.status(201)
    .json({ message: "new post created!" })
    .catch((error) => console.log(error));
});

// TODO DELETE topic from db

// TODO PUT topic

module.exports = app;
