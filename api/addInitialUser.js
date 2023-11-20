const mongoose = require('mongoose');
const User = require('./user.js'); 

mongoose.connect('mongodb://localhost:27017/pomo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');

  const user = new User({
    username: 'nahfila@mail.com',
    password: 'helloworld123'
  });

  await user.save();

  console.log('User saved successfully');
  process.exit(0); 

}).catch((error) => {
  console.log('Failed to connect to MongoDB', error);
  process.exit(1); 
});
