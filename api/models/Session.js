const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  user: {
    type: String,
    ref: "User",
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  numberOfTasks: {
    type: Number,
    default: 0,
  },
});

const Session = mongoose.model("Session", SessionSchema);
module.exports = Session;

// const postSchema = new Schema({
//   title: String,
//   content: String,
//   author: { type: String, ref: "User" },
// });
// module.export = mongoose.model("Post", postSchema);

// const userSchema = new Schema({
//   name: String,
//   posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
// });
// module.export = mongoose.model("User", userSchema);
