const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: [true, "Please type a valid URL address"],
    validate: {
      isUrl: function (url) {
        return "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)".test(
          url
        );
      },
      message: (props) => `${props.value} is not a valid url!`,
    },
  },
  comment: {},
});

module.exports = mongoose.model("Item", itemSchema);
