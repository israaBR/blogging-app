const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true, minLength: 10 },
  author: { type: mongoose.Types.ObjectId, ref: "user" },
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
