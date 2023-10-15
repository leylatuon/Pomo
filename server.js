const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./auth');
const cors = require('cors');
const path = require('path');

const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Failed to connect to MongoDB', error);
});

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

// Serve static files from the root directory
app.use(express.static(__dirname));

// Catch-all route to serve the login.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

