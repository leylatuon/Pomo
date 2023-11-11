const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./auth');
const cors = require('cors');
const path = require('path');

const app = express();

const username = encodeURIComponent('admin');
const password = encodeURIComponent('nahfilaali2003');

mongoose.connect(`mongodb://${username}:${password}@localhost:27017/pomodatabase?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin"
})


app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);


app.use(express.static(__dirname));

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.path);
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

