const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();
const users = require('./users');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('json spaces', 2);

var currentdate = new Date(); 
var time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/taskmanager-backend"
mongoose.connect(mongoUrl, { useNewUrlParser: true })
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("## taskmanager-backends is connected to mongodb ##"))






app.get('/users', function(req, res){
  res.json(users)
})

app.get('/users/:id', function(req, res){
  res.json({key: {second:'One specific user'}})
})

app.post('/users', function(req, res){
  console.log(req.body)
  res.json(req.body)
})

const port = process.env.PORT || 3000;
app.listen(port, function(){console.log("## Listening on port "+ port +" ##" + "\n## Time is: " + time + " ##")});
