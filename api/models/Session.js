const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  title: {
    type: String,
    default: "Placeholder",
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
      text: { type: String, require: true },
      complete: { type: Boolean, default: false },
      timestamp: { type: String, default: Date.now() },
    },
  ],
  numberOfTasks: {
    type: Number,
    default: 0,
  },
});

const Session = mongoose.model("Session", SessionSchema);
module.exports = Session;
