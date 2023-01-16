const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, minLength: 4 },
  lastName: { type: String, required: true, minLength: 4 },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
