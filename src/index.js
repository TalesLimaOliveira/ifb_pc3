const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const userController = require('./controllers/UserController');

// Route to add a user
app.post('/user', userController.store);
// Route to list all users
app.get('/user', userController.show);
// Route to list users filtered by email
// ex: /user/buscaemail/?email=vaguetti@gmail.com
app.get('/user/buscaemail/*', userController.index);
// Route to delete a user
app.delete('/user/:id', userController.destroy);
// Route to update a user
app.put('/user/:id', userController.update);

const testController = require('./controllers/TestController');

// Route to show test users
app.get('/userscontroller', testController.show);

// Route to show a welcome message
app.get('/', (req, res) => {
  res.send('Alô REST API');
});

// Route to echo a parameter
app.get('/api/echo/:param*', (req, res) => {
  res.send(req.params.param);
});

// Route to echo two parameters
app.get('/api/echodbl/:param1/:param2', (req, res) => {
  res.send(req.params.param1 + ', ' + req.params.param2);
});

// Route to echo a query parameter
app.get('/api/echoquery/*', (req, res) => {
  res.send(req.query.q);
});

// Route to show API status
app.get('/api', (req, res) => {
  res.send('API ativa!!!');
});

const users = [
  { name: 'Jones', email: 'jones@gmail.com' },
  { name: 'Henrique', email: 'henrique@hotmail.com' }
];

// Route to list predefined users
app.get('/users', (req, res) => {
  res.json(users);
});

// Route to echo request body
app.post('/api/echobody', (req, res) => {
  res.send(req.body);
});

// Start the server
app.listen(3000, () => console.log('server started'));

