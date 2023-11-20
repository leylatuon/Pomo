const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
  session: {
    type: String,
    ref: "Session",
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
