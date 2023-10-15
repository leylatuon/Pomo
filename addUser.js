const mongoose = require('mongoose');
const User = require('./user');  // adjust the path to your User model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Once the database is connected, add the user
mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');

  // Create new user
  const newUser = new User({
    username: 'nahfila@mail.com',  // Assuming the field for email in your schema is named 'username'
    password: 'helloworld123'
  });

  // Save the new user
  try {
    await newUser.save();
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  } finally {
    mongoose.connection.close();  // Close the connection
  }
});
