var express = require('express');
const users = require('./users');

const app = express();

var port = process.env.PORT || 3000;

app.set('json spaces', 2);

app.get('/users', function(req, res){
  res.json(users)
})

app.get('/users/:id', function(req, res){
  res.json({key: {second:'One specific user'}})
})


app.listen(port);
