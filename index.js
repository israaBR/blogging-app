const usersRouter = require("./routes/user");
const postsRouter = require("./routes/post");

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/bloggingApp";

mongoose.connect(MONGO_URL, (error) => {
  if (!error) return console.log("Database Connected");
  else console.log("------------", error);
});
app.listen(PORT, (error) => {
  if (!error) return console.log(`Server listening on port ${PORT}`);
  else console.log(error);
});
app.use(logger("tiny"));
app.use(express.json());
app.use("/user", usersRouter);
app.use("/post", postsRouter);
