const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Topic", topicSchema);
