const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// From auth
const authRouter = require("./auth");
const path = require("path");

const app = express();

const username = encodeURIComponent("admin");
const password = encodeURIComponent("nahfilaali2003");

app.use(express.json());
app.use(cors());
// From auth
app.use("/auth", authRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/pomodatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
  })
  .then(() => console.log("Connected to MongoDB as admin"))
  .catch(console.error);

// Models
const Todo = require("./models/Todo");
const user = require("./models/user");
const Session = require("./models/Session");

// SESSIONS
app.get("/sessions", async (req, res) => {
  const sessions = await Session.find();
  res.json(sessions);
});

app.post("/sessions/new", async (req, res) => {
  const session = new Session({
    title: req.body.title,
    active: req.body.active,
    user: req.body.user,
    todos: req.body.todos,
    numberOfTasks: req.body.numberOfTasks,
  });

  session.save();
  res.json(session);
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
});

app.post("/todo/new", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save();

  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);

  //todo.save();

  res.json({ result });
});

app.get("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
});

app.put("/todo/update/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.text = req.body.text;

  todo.save();

  res.json(todo);
});

app.use(express.static(__dirname));

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.path);
  next();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "login.js"));
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
