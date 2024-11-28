const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
  // List all users
  async show(req, res) {
    let users = await User.find();
    return res.json(users);
  },
  // List users filtered by email
  async index(req, res) {
    let users = await User.find({ email: req.query.email });
    return res.json(users);
  },
  // Add a new user
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },
  // Delete a user by ID
  async destroy(req, res) {
    let user = await User.findByIdAndRemove(req.params.id);
    return res.json(user);
  },
  // Update a user by ID
  // Requires two data: the ID via param and the JSON via body
  async update(req, res) {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(user);
  }
};