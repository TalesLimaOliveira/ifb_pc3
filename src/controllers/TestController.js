// index, show, store, update, destroy
module.exports = {
  // Show test users
  async show(req, res) {
    const users = [
      { name: 'Jones', email: 'jones@gmail.com' }
    ];
    return res.json(users);
  }
};