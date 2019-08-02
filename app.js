const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const app = express();

app.use(cors());

// Takes the raw requests and turns them into usable properties on req.body
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// Set indentation to 2 spaces for response
app.set('json spaces', 2);

const USER = mongoose.model('user', {});
const TODO = mongoose.model('todo', {});

// Routes
app.get('/users', function(req, res){
  USER.find({})
  .then(users => {
    res.json(users)
  })
});

app.get('/todos', function(req, res){
  TODO.find()
    .then(todos => {
      res.json(todos)
    })
});

/*app.post('/users', function(req, res){
  console.log(req.body)
  res.json(req.body)
});*/

// Export the module so it can be required in start.js
module.exports = app;
