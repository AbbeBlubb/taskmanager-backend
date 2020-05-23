const mongoose = require('mongoose');
const helpers = require('./helpers');

// Import .env-vars
require('dotenv').config();

// Connect to DB, tell Mongoose to use ES6 promises, handle errors, inform about connection
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/"
mongoose.connect(mongoUrl, { useNewUrlParser: true, dbName: 'taskmanager-backend' })
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => {
  console.error("Message from start.js, on error: Connection error:", err)
  console.error("TESYT from start.js, on error: Connection error:", err.message)
})
mongoose.connection.once("open", () => {
  console.log(
    "## taskmanager-backend is connected to mongodb ##",
    "\n## " + mongoUrl + " ##"
  )
})

// Import models if needed - but the Taskmanager app right now only GET data, there's no POST / PUT / DELETE

// Start the app
const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(
    "## Listening on port " + port + " ##" + "\n## Time is: " + helpers.getTime() + " ##"
  )
});
