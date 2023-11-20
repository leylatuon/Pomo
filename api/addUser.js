const mongoose = require('mongoose');
const User = require('./user'); 

mongoose.connect('mongodb://localhost:27017/defaultdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');

  // Create new user
  const newUser = new User({
    username: 'nahfila@mail.com', 
    password: 'helloworld123'
  });

  // Save the new user
  try {
    await newUser.save();
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  } finally {
    mongoose.connection.close(); 
  }
});
