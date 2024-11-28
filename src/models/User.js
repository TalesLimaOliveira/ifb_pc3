const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  nome: String, // User's name
  email: String, // User's email
  password: String // User's password
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);